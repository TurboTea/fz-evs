<template>
  <div class="w-full h-full flex flex-col gap-[26px]">
    <div class="flex flex-col gap-[25px]">
      <div class="flex justify-between">
        <div>
          <span class="text-[30px] font-[600] text-[#000000] leading-[42px] tracking-[2px]">{{ $title }}</span>
        </div>
        <div>
          <slot name="header-tr" />
        </div>
      </div>
      <slot name="header-b" />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <div class="self-center">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const $route = useRoute()
const props = defineProps({
  title: {
    type: String,
  },
})
const { t } = useI18n()
const $title = computed(() => (props.title ? props.title : t(`baas.default-layout.${$route.name as string}`)))
</script>
