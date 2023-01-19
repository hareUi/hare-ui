import { ExtractPropTypes, PropType } from 'vue'
export type AlertType = 'success' | 'warning' | 'info' | 'error'

export const alertProps = {
  center: {
    type: Boolean,
    default: false
  },
  title: {
    type: String as PropType<String>,
    default: 'This is title'
  },
  type: {
    type: String as PropType<AlertType>,
    default: 'success'
  }

} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>
