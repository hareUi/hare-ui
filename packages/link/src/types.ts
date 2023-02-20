import { ExtractPropTypes, PropType } from 'vue'

export type ILinkType = 'primary' | 'success' | 'warning' | 'danger'

export const linkProps = {
  type: {
    type: String as PropType<ILinkType>,
    default: 'primary'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ''
  }
} as const

export type LinkProps = ExtractPropTypes<typeof linkProps>
