import { ExtractPropTypes } from 'vue'

export const backToTopProps = {
  right: {
    type: Number,
    default: 50
  },
  bottom: {
    type: Number,
    default: 50
  },
  visiableHeight: {
    type: Number,
    default: 200
  }
} as const

export type BackToTopProps = ExtractPropTypes<typeof backToTopProps>
