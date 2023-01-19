import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'

export const switchProps = {
  activeColor: {
    type: String as PropType<String>,
    default: '#13ce66'
  },
  inactiveColor: {
    type: String as PropType<String>,
    default: '#ff4949'
  },
  modelvalue: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
