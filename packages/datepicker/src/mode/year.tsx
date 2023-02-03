import dpTitle from '../common/title'
import dpRowContent from '../common/row-content'
import { defineComponent, inject } from 'vue'
import * as dayjs from 'dayjs'
import { dpContext } from '../types'
export default defineComponent({
  name: 'yearMode',
  components: { dpTitle, dpRowContent },
  setup(props, { emit }) {
    const { currentYear, dpEmit: fn } = inject('DP_CTX') as dpContext
    return () => {
      const prevData = []
      const currentData = []
      const nextData = []
      const thisYear = currentYear.value as number
      // console.log(thisYear)

      for (let i = 0; i < 10; i++) {
        if ((thisYear + i) % 10 === 0) {
          nextData.push(thisYear + i)
          break
        }
        currentData.push(thisYear + i)
      }
      for (let i = 1; i < 10; i++) {
        if ((thisYear - i + 1) % 10 === 0) {
          prevData.push(thisYear - i)
          break
        }
        currentData.unshift(thisYear - i)
      }
      // console.log(currentData, nextData, prevData)
      const pickYear = item => {
        fn(item)
      }
      return (
        <div class="h-dp__content-year">
          {prevData.map((item, index) => {
            return <div class={'h-dp-cell h-dp-cell-grey'}>{item}</div>
          })}
          {currentData.map((item, index) => {
            return (
              <div
                onClick={() => pickYear(item)}
                class={`h-dp-cell ${
                  item === dayjs().year() ? 'h-dp-cell-now' : ''
                }`}
              >
                {item}
              </div>
            )
          })}
          {nextData.map((item, index) => {
            return <div class={'h-dp-cell h-dp-cell-grey'}>{item}</div>
          })}
        </div>
      )
    }
  }
})
