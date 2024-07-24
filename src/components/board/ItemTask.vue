<template>
  <div class="flex flex-col justify-center items-center min-w-72 max-w-72">
    <div class="w-11/12 m-1 bg-white rounded-lg">
      <div style="padding: 16px 24px 16px 24px; border-radius: 0 0 8px 8px">
        <span class="text-zinc-600 text-sm text-custom">
          {{ text }}
        </span>
        <div class="flex justify-between pt-1.5">
          <div class="flex items-center">
            <img
              class="sc-1oveq8w-0 ebbuDN"
              :alt="imgAlt"
              :src="imgSrc"
            />
            <span class="ml-2 text-neutral-600 text-sm font-bold text-custom">
              {{ keyText }}
            </span>
          </div>
          <div>
            <a-tooltip placement="bottom">
              <template #title>
                {{ tooltipTitle }}
              </template>
              <a-button shape="circle" class="flex items-center justify-center" style="border: none; padding: 0;">
                <img
                  class="w-6 h-6 rounded-full"
                  :src="buttonImgSrc"
                  :alt="keyText"
                />
              </a-button>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    text: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    keyText: {
      type: String,
      required: true
    },
    tooltipTitle: {
      type: String,
      required: true
    },
    buttonImgSrc: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.text-custom {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
