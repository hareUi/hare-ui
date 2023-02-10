import { ExtractPropTypes, PropType } from 'vue'

export type IMessageType = 'success' | 'warning' | 'info' | 'danger'

export const messageProps = {
  id: {
    type: Number,
    default: 0
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<IMessageType>,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 2000
  },
  center: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function as PropType<() => void>,
    default: () => {}
  },
  offset: {
    type: Number,
    default: 20
  }
} as const

export type MessageProps = ExtractPropTypes<typeof messageProps>
