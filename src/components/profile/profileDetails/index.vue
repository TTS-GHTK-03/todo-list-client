<template>
    <div class="profile-details bg-white rounded shadow flex flex-col w-72 mt-48 p-6 ml-72">
        <h3 class="text-xs text-slate-400 mb-4">ABOUT</h3>
        <ul class="list-none p-0">
            <li class="flex items-center my-2">
                <i class="fa-solid fa-suitcase"></i>
                <div class="flex items-center justify-between w-full">
                    <input v-if="!editingJobTitle" @click="startEditing('jobTitle')"
                        class="text-sm px-2 pt-2 pb-1.5 text-slate-400 ml-2 info" placeholder="Your job title">


                    <div v-else class="relative ml-2 flex items-center w-full">
                        <input placeholder="Your job title" spellcheck="false" type="text"
                            class="w-full border-2 border-blue-400 rounded p-2 h-8 text-sm"
                            @blur="stopEditing('jobTitle')" ref="jobTitleInput" />
                        <div class="absolute right-0 top-full mt-1 flex space-x-1">
                            <button @click="confirmEdit('jobTitle')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button @click="cancelEdit('jobTitle')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="flex items-center my-2">
                <i class="fa-solid fa-code-fork fa-flip-vertical"></i>
                <div class="flex items-center justify-between w-full">
                    <input v-if="!editingDepartment" @click="startEditing('department')"
                        class="text-sm px-2 pt-2 pb-1.5 text-slate-400 ml-2 info" placeholder="Your department">
                    <div v-else class="relative ml-2 flex items-center w-full">
                        <input placeholder="Your department" spellcheck="false" type="text"
                            class="w-full border-2 border-blue-400 rounded p-2 h-8 text-sm"
                            @blur="stopEditing('department')" ref="departmentInput" />
                        <div class="absolute right-0 top-full mt-1 flex space-x-1">
                            <button @click="confirmEdit('department')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button @click="cancelEdit('department')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="flex items-center my-2">
                <i class="fa-regular fa-building"></i>
                <div class="flex items-center justify-between w-full">
                    <input v-if="!editingOrganization" @click="startEditing('organization')"
                        class="text-sm px-2 pt-2 pb-1.5 text-slate-400 ml-2 info" placeholder="Your organization">
                    <div v-else class="relative ml-2 flex items-center w-full">
                        <input placeholder="Your organization" spellcheck="false" type="text"
                            class="w-full border-2 border-blue-400 rounded p-2 h-8 text-sm"
                            @blur="stopEditing('organization')" ref="organizationInput" />
                        <div class="absolute right-0 top-full mt-1 flex space-x-1">
                            <button @click="confirmEdit('organization')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button @click="cancelEdit('organization')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="flex items-center my-2">
                <i class="fa-solid fa-location-dot"></i>
                <div class="flex items-center justify-between w-full">
                    <input v-if="!editingLocation" @click="startEditing('location')"
                        class="text-sm px-2 pt-2 pb-1.5 text-slate-400 ml-2 info" placeholder="Your location">
                    <div v-else class="relative ml-2 flex items-center w-full">
                        <input placeholder="Your location" spellcheck="false" type="text"
                            class="w-full border-2 border-blue-400 rounded p-2 h-8 text-sm"
                            @blur="stopEditing('location')" ref="locationInput" />
                        <div class="absolute right-0 top-full mt-1 flex space-x-1">
                            <button @click="confirmEdit('location')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button @click="cancelEdit('location')"
                                class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <h3 class="text-xs text-slate-400 mb-4">CONTACT</h3>
        <div class="flex items-center">
            <i class="fa-regular fa-envelope"></i>
            <span class="text-sm px-2 pt-2 pb-1.5 text-slate-400 ml-2">thanhhaxinhdep@gmail.com</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editingJobTitle: false,
            editingDepartment: false,
            editingOrganization: false,
            editingLocation: false,
            textJobTitle: 'Your job title',
            textDepartment: 'Your department',
            textOrganization: 'Your organization',
            textLocation: 'Your location'
        };
    },
    methods: {
        startEditing(field) {
            this.editingJobTitle = false;
            this.editingDepartment = false;
            this.editingOrganization = false;
            this.editingLocation = false;
            this[`editing${field.charAt(0).toUpperCase() + field.slice(1)}`] = true;
            this.$nextTick(() => {
                this.$refs[`${field}Input`].focus();
            });
        },
        stopEditing(field) {
            this[`editing${field.charAt(0).toUpperCase() + field.slice(1)}`] = false;
        },
        confirmEdit(field) {
            this[`editing${field.charAt(0).toUpperCase() + field.slice(1)}`] = false;
        },
        cancelEdit(field) {
            this[`editing${field.charAt(0).toUpperCase() + field.slice(1)}`] = false;
        }
    }
};
</script>

<style scoped>
@import 'index.scss';
</style>