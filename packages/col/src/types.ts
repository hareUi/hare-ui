import { ExtractPropTypes } from 'vue'

export const colProps = {
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number
  }
} as const

export type ColProps = ExtractPropTypes<typeof colProps>
