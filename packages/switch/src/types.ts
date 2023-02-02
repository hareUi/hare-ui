import { ExtractPropTypes, PropType } from 'vue'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
export type ColorType = RGB | RGBA | HEX

export type LengthType = `${string}px`

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  width: {
    type: String as PropType<LengthType>,
    default: '40px'
  },
  activeColor: {
    type: String as PropType<ColorType>,
    default: '#00008B'
  },
  inactiveColor: {
    type: String as PropType<ColorType>,
    default: '#4169E1'
  },
  name: {
    type: String,
    default: ''
  },
  activeTextColor: {
    type: String as PropType<ColorType>,
    default: '#228B22'
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
