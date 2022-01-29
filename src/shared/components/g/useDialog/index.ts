import { cloneDeep } from 'lodash'
import { Ref } from 'vue'
export const useDialog = <
  T extends {
    props
    emit
    paramsInit
    reset: (...args) => Promise<void> | void
    cancel: (...args) => Promise<void> | void
    confirm: (...args) => Promise<void> | void
  },
>(
  payload: T,
): {
  showDialog: Ref<boolean>
  params: Ref<typeof payload['paramsInit']>
  paramsInit: typeof payload['paramsInit']
  handleReset: typeof payload['reset']
  handleCancel: typeof payload['cancel']
  handleConfirm: typeof payload['confirm']
} => {
  const { props, emit, paramsInit, reset, cancel, confirm } = payload
  const showDialog = useVModel(props, 'modelValue', emit)
  const params = ref<typeof payload['paramsInit']>(cloneDeep(paramsInit)) as Ref<typeof payload['paramsInit']>
  const handleReset = () => {
    params.value = cloneDeep(paramsInit)
    reset()
  }
  const handleCancel = async () => {
    await cancel()
    showDialog.value = false
  }
  const handleConfirm = async () => {
    await confirm()
    showDialog.value = false
  }
  watch(showDialog, value => {
    if (value) {
      handleReset()
    }
  })
  return {
    showDialog,
    params,
    paramsInit,
    handleReset,
    handleCancel,
    handleConfirm,
  }
}
