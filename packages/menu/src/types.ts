import { ExtractPropTypes, PropType, Ref } from 'vue'
import { EmitType } from '../../types'

export type MenuModeType = 'horizontal' | 'vertical'
export type MenuOnSelect = (e: string) => void
type ILogoType = {
  imgSrc: string
  text: string
  target: string
}
/**
 * menuProps属性是只读的
 */
export const menuProps = {
  defaultIndex: {
    type: String,
    default: ''
  },
  mode: {
    type: String as PropType<MenuModeType>,
    default: 'horizontal'
  },
  logo: {
    type: Object as PropType<ILogoType>
  },
  onSelect: {
    type: Function as PropType<(e: string) => null>
  }
} as const
export type MenuContext = {
  index: Ref<String>
  onSelect?: MenuOnSelect
}
export type MenuProps = ExtractPropTypes<typeof menuProps>
export const menuItemProps = {
  index: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  }
}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
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
  },
  icon: {
    type: String
  }
} as const

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>
