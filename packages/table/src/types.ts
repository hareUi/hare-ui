import { ExtractPropTypes } from 'vue'

export const tableProps = {
  data: {
    type: Array<Object>,
    default: []
  }
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
