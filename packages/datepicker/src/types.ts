import { ExtractPropTypes, PropType, ref, Ref } from 'vue'
type IDatePickerSize = 'sm' | '' | 'lg'
export type IDatePickerMode = 'date' | 'year' | 'month' | 'week' | 'datetime'
export interface dpContext {
  currentDate: Ref<number>
  currentYear: Ref<number>
  currentMonth: Ref<number>
  dpEmit: (e: string) => void
  curMode: Ref<string>
  format: string
  pickedDate: Ref<string>
}
export const datepickerProps = {
  size: {
    type: String as PropType<IDatePickerSize>,
    default: ''
  },
  mode: {
    type: String as PropType<IDatePickerMode>,
    default: 'date'
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD'
  }
} as const

export type DatepickerProps = ExtractPropTypes<typeof datepickerProps>
