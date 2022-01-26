<!--此组件用于缺省提示-->
<template>
  <el-tooltip
    ref="tooltipRef"
    v-model:visible="visible"
    :popper-options="{
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: true,
            enabled: true,
          },
        },
      ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    trigger="hover"
    popper-class="overflow-tooltip"
  >
    <template #content>
      <div v-html="tooltipContent"></div>
    </template>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  rootEl: {
    type: Object as PropType<HTMLElement>,
    default: window,
  },
  classList: {
    type: Array as PropType<string[]>,
    default: () => ['truncate', 'line-clamp-1', 'line-clamp-2'],
  },
})
const buttonRef = ref()
const tooltipRef = ref()
const tooltipContent = ref()
const visible = ref(false)
props.rootEl.addEventListener('mouseover', e => {
  const el = e.target as HTMLElement
  if (Array.from(el.classList).some(_ => props.classList?.includes(_)) && el.scrollWidth > el.clientWidth) {
    buttonRef.value = e.target
    tooltipContent.value = el.innerHTML
    visible.value = true
  } else {
    visible.value = false
  }
})
</script>
