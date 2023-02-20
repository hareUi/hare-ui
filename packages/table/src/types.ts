import { ExtractPropTypes } from 'vue'

export const tableProps = {} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
