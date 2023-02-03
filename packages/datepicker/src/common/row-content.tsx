import { defineComponent, PropType } from 'vue'
interface propData {
  key: number
  value: string
}
type mode = 'year' | 'month' | 'date'

const props = {
  mode: String as PropType<mode>,
  prevData: Object || undefined,
  currentData: Object || undefined,
  nextData: Object || undefined
}
export default defineComponent({
  name: 'dp-row-content',
  props,
  emits: ['pickDate'],
  setup(props, { emit }) {
    return () => {
      const pickDate = (e: string) => {
        emit('pickDate', e)
      }
      const renderMode = (mode: mode) => {
        if (mode === 'date') {
          return [dateMode('prev'), dateMode('current'), dateMode('next')]
        } else if (mode === 'year') {
          return [yearMode('prev'), yearMode('current'), yearMode('next')]
        }
      }
      const dateMode = (type: string) => {
        return props[type + 'Data'].map((item: string, index: number) => {
          type = type === 'current' ? '' : type
          return (
            <span
              class={`hare-datepicker__row__content--date__item${
                type === '' ? '' : '--grey'
              }`}
              key={type + item}
              onClick={() => pickDate(type + item)}
            >
              {item}
            </span>
          )
        })
      }
      const yearMode = (type: string) => {
        console.log(props[type + 'Data'])

        return
      }
      return (
        <div class="hare-datepicker__row__content">
          {renderMode(props.mode)}
        </div>
      )
    }
  }
})
