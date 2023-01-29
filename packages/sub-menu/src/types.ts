import { ExtractPropTypes } from 'vue'
export type { MenuContext } from '../../menu/src/types'

export const subMenuProps = {
  index: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>
