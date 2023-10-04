import { ExtractPropTypes } from 'vue'

// 用户可提供表格行唯一标识
type TableItem<T> = {
  key?: string
} & T

type ColumnItem = {
  title: string
  dataIndex: string
}

export const tableProps = {
  data: {
    type: Array<TableItem<Object>>,
    default: () => []
  },
  columns: {
    type: Array<ColumnItem>,
    default: () => []
  }
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
