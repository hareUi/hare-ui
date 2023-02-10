import dayjs from 'dayjs/esm'
import { defineComponent, computed, inject } from 'vue'
import { dpContext } from '../types'
export default defineComponent({
  name: 'monthMode',
  emits: ['hoverEmit'],
  setup(props, { emit }) {
    return () => {
      const { currentYear, dpEmit: fn, format } = inject('DP_CTX') as dpContext
      const pickMonth = (index: number) => {
        fn(index + 1 + '')
      }
      const itemClasses = (index: number) => {
        const list = ['h-dp-cell']

        if (index === dayjs().month()) {
          list.push('h-dp-cell--now')
        }
        return list
      }
      const hoverEmit = (index: number) => {
        // console.log(`${currentYear.value}-${index + 1}`)
        emit(
          'hoverEmit',
          dayjs(`${currentYear.value}-${index + 1}`).format(format)
        )
      }
      return (
        <div class="h-dp__content-month">
          {new Array(12).fill(0).map((item, index) => {
            return (
              <div
                // onHover={() => hoverEmit(index)}
                onMouseover={() => hoverEmit(index)}
                onClick={() => pickMonth(index)}
                class={itemClasses(index)}
              >
                {index + 1}月
              </div>
            )
          })}
        </div>
      )
    }
  }
})
