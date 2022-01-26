<template>
  <i v-if="isFont" :class="`text-[24px] font-${name} ${className}`" />
  <svg v-else-if="isSvg" :class="`w-[1em] h-[1em] ${className}`" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
  <img
    v-else-if="isImg"
    :class="`${className}`"
    aria-hidden="true"
    v-bind="$attrs"
    :src="require(`@assets/icons/img/${name}.png`)"
  />
  <component v-else-if="isElIcon" :class="`w-[1em] h-[1em] ${className}`" :is="name" />
</template>
<script lang="ts">
import * as ElIconModules from '@element-plus/icons-vue'
export default {
  components: {
    ...ElIconModules,
  },
}
</script>
<script lang="ts" setup>
import { fontList, imgList, svgList } from '@assets/icons'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})
const iconName = computed(() => {
  return `#icon-${props.name}`
})
const isSvg = computed(() => {
  return svgList.includes(props.name)
})
const isImg = computed(() => {
  return imgList.includes(props.name)
})
const isFont = computed(() => {
  return fontList.includes(props.name)
})
const isElIcon = computed(() => {
  return Object.keys(ElIconModules).includes(props.name)
})
</script>
