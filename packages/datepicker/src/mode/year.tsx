import dpTitle from '../common/title'
import dpRowContent from '../common/row-content'
import { defineComponent } from 'vue'
import * as dayjs from 'dayjs'
export default defineComponent({
  name: 'yearMode',
  components: { dpTitle, dpRowContent },
  setup() {
    return () => {
      const prevData = []
      const currentData = []
      const nextData = []
      const thisYear = dayjs().year()
      console.log(thisYear)

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
      console.log(currentData, nextData, prevData)

      return (
        <div class="hare-datepicker">
          <dpTitle
            mode="year"
            yearRangeStart="2020"
            yearRangeEnd="2029"
          ></dpTitle>
          <dpRowContent
            mode="year"
            prevData={prevData}
            currentData={currentData}
            nextData={nextData}
          ></dpRowContent>
        </div>
      )
    }
  }
})
