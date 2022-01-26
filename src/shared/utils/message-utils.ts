import { ElMessage } from 'element-plus'

export const MessageUtils = {
  warning: message => {
    ElMessage({
      message: message,
      type: 'warning',
    })
  },
  success: message => {
    ElMessage({
      message: message,
      type: 'success',
    })
  },
}
