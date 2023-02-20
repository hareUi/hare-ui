import { ExtractPropTypes, PropType } from 'vue'
type IalignType = 'top' | 'middle' | 'bottom ' | ' stretch'
type IJustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
export const rowProps = {
  align: {
    type: String as PropType<IalignType>,
    default: 'top'
  },
  gutter: {
    type: [Number, Array] as PropType<number | Array<number>>,
    default: 0
  },
  justify: {
    type: String as PropType<IJustifyType>,
    default: 'start'
  },
  wrap: {
    type: Boolean,
    default: true
  }
} as const

export type RowProps = ExtractPropTypes<typeof rowProps>
