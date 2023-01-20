import { ExtractPropTypes, PropType } from 'vue'
export type AlertType = 'success' | 'warning' | 'info' | 'error'

export const alertProps = {
  center: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  icon: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  title: {
    type: String as PropType<String>,
    default: 'Title'
  },
  type: {
    type: String as PropType<AlertType>,
    default: 'success'
  },
  close: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  closeText: {
    type: String as PropType<String>,
    default: ''
  },
  description: {
    type: String as PropType<String>,
    default: ''
  }
} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>
