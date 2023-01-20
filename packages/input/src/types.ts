import { ExtractPropTypes, PropType } from 'vue'
type sizeEnum = 'small' | 'middle' | 'large'
export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  size: {
    type: String as PropType<sizeEnum>,
    default: 'middle'
  },
  bordered: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
