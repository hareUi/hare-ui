import { ExtractPropTypes, PropType } from 'vue'

export const emptyProps = {
  image: {
    type: String as PropType<string>,
    default: '/empty.png'
  },
  imageSize: {
    type: Number,
    default: 200
  },
  description: {
    type: String as PropType<string>,
    default: 'do not have data here'
  }
} as const

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
