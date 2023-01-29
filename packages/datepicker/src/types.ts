import { ExtractPropTypes, PropType } from 'vue'
type IDatePickerSize = 'sm' | '' | 'lg'
type IDatePickerMode = 'date' | 'year' | 'mouth' | 'week'
export const datepickerProps = {
  size: {
    type: String as PropType<IDatePickerSize>,
    default: ''
  },
  mode: {
    type: String as PropType<IDatePickerMode>,
    default: 'date'
  }
} as const

export type DatepickerProps = ExtractPropTypes<typeof datepickerProps>
