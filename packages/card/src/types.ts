import { ExtractPropTypes, PropType } from 'vue'

export const cardProps = {
  shadow: {
    type: String as PropType<String>,
    // values:['always','hover','never'],
    default: 'always'
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
