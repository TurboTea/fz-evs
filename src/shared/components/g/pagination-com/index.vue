<template>
  <el-pagination
    v-show="total > 0"
    class="list_pagination"
    background
    v-model:current-page="pageIndex_"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="pageSizeArr"
    @current-change="handleNumChange"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
// import { useRoute } from 'vue-router'
// import { useAuth } from '@shared/store/modules/auth'

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  pageIndex: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 5,
  },
  pageSizeList: {
    type: Array as PropType<number[]>,
  },
  run: {
    type: Function,
    required: true,
  },
})
const emit = defineEmits(['update:pageIndex', 'update:pageSize'])
// const $route = useRoute()
// const authStore = useAuth()
const pageIndex_ = ref(props.pageIndex)
const pageSizeArr = ref([5, 10, 15, 20])
// if ($route.name === 'app-market' && authStore.consoleInfo.consoleObjectId === '3') {
//   pageSizeArr.value = [3, 6, 9, 12]
// } else {
//   pageSizeArr.value = [5, 10, 15, 20]
// }
if (props.pageSizeList) {
  pageSizeArr.value = props.pageSizeList!
}
watch(
  computed(() => props.pageIndex),
  newVal => {
    pageIndex_.value = newVal
  },
)
const handleGetTableData = () => {
  props.run()
}
const handleNumChange = val => {
  emit('update:pageIndex', val)
  handleGetTableData()
}
const handleSizeChange = val => {
  emit('update:pageIndex', 1)
  emit('update:pageSize', val)
  handleGetTableData()
}
</script>

<style scoped lang="scss">
.list_pagination {
  margin-top: 35px;
  text-align: right;

  :deep(.btn-prev),
  :deep(.btn-next) {
    background: none;
    border: 1px solid #d9d9d9;

    &:hover {
      color: #2555c6;
    }
  }

  :deep(.el-pager li) {
    //min-width: 32px;
    //height: 32px;
    //border-radius: 2px;
    border: 1px solid #d9d9d9;
    //margin-left: 10px;
    background: none;
    color: rgba(0, 0, 0, 0.65);

    &.active + li {
      border-left: 1px solid #d9d9d9;
    }

    &:not(.disabled):hover,
    &.active,
    &:hover {
      color: #ffffff;
      background: #1953cd;
    }
  }
}
</style>
