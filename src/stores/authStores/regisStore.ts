import { defineStore } from 'pinia';
import { regisAccount, validateOtp } from '../../api/register';

interface RegisAccountState {
  email: string | null;
  error: string | null;
}

export const useRegisAccountStore = defineStore('regisAccount', {
  state: (): RegisAccountState => ({
    email: null,
    error: null,
  }),
  actions: {
    async regisAccount(email: string) {
      try {
        const response = await regisAccount({ email });
        console.log(response.data);
        // Check the response data for "Account has been registered"
        if (response.data === "Account has been registered") {
          console.log(response.data);
          throw new Error("Account has already been registered");
        }

        console.log(response);
        this.email = email;
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});


  //
interface validateOtpSate {
  otp: string | null;
  error: string | null;
  registerKey : string | null;
}

export const useValidateOtpRegisStore = defineStore('validateOtp', {
  state: (): validateOtpSate => ({
    otp: null,
    error: null,
    registerKey: null,
  }),
  actions: {
    async validateOtp(email:string ,otp: string) {
      try {
        const registerKey = await validateOtp({ email, otp });
        this.registerKey = registerKey;
        this.otp = otp;
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});

  //
