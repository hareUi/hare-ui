import dpTitle from '../common/title'
import dpRowTitle from '../common/row-title'
import dpRowContent from '../common/row-content'
import dpRowFooter from '../common/row-footer'
import { defineComponent, inject, provide } from 'vue'
import { computed, ref } from 'vue'
const title = ['日', '一', '二', '三', '四', '五', '六']
const currentDate = ref(new Date().getDate())
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

export default defineComponent({
  name: 'dateMode',
  emits: ['pickDate'],
  components: { dpTitle, dpRowTitle, dpRowContent, dpRowFooter },
  setup(props, ctx) {
    return () => {
      const getCurrentYear = computed(() => {
        return new Date(
          currentYear.value,
          currentMonth.value
        ).toLocaleDateString('default', {
          year: 'numeric'
        })
      })
      const getCurrentMonth = computed(() => {
        return new Date(
          currentYear.value,
          currentMonth.value
        ).toLocaleDateString('default', {
          month: 'short'
        })
      })
      const toPrevMonth = () => {
        if (currentMonth.value === 0) {
          currentYear.value--
          currentMonth.value = 11
        } else {
          currentMonth.value--
        }
      }
      const toNextMonth = () => {
        if (currentMonth.value === 11) {
          currentYear.value++
          currentMonth.value = 0
        } else {
          currentMonth.value++
        }
      }
      const toPrevYear = () => {
        currentYear.value--
      }
      const toNextYear = () => {
        currentYear.value++
      }
      const prevDayCount = computed(() => {
        return new Date(currentYear.value, currentMonth.value, 0).getDate()
      })
      const prevDays = computed(() => {
        const prevDayListAll = new Array(prevDayCount.value)
          .fill(0)
          .map((item, index) => index + 1)
        const prevDayCutNum = new Date(
          currentYear.value,
          currentMonth.value,
          1
        ).getDay()
        const prevDayList =
          prevDayCutNum !== 0 ? prevDayListAll.slice(-prevDayCutNum) : []
        return prevDayList
      })
      const currentCount = computed(() => {
        return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
      })
      const currentDays = computed(() => {
        return new Array(currentCount.value)
          .fill(0)
          .map((item, index) => index + 1)
      })
      const nextCount = computed(() => {
        return new Date(currentYear.value, currentMonth.value + 2, 0).getDate()
      })

      const nextDays = computed(() => {
        const nextDayListAll = new Array(prevDayCount.value)
          .fill(0)
          .map((item, index) => index + 1)
        const nextDayCutNum = currentDays.value.length + prevDays.value.length
        const nextDayList =
          nextDayCutNum !== 0 ? nextDayListAll.slice(0, 42 - nextDayCutNum) : []
        return nextDayList
      })
      const pickedDate = ref(null)
      const pickDate = (item: string) => {
        let date: number
        if (item.startsWith('prev')) {
          date = parseInt(item.split('prev')[1])
          pickedDate.value = new Date(
            currentYear.value,
            currentMonth.value - 1,
            date
          ).toLocaleDateString('default')
        } else if (item.startsWith('next')) {
          date = parseInt(item.split('next')[1])
          pickedDate.value = new Date(
            currentYear.value,
            currentMonth.value + 1,
            date
          ).toLocaleDateString('default')
        } else {
          date = parseInt(item)
          pickedDate.value = new Date(
            currentYear.value,
            currentMonth.value,
            date
          ).toLocaleDateString('default')
        }
        fn(pickedDate)
      }
      const pickToday = () => {
        pickedDate.value = new Date().toLocaleDateString('default')
        fn(pickedDate)
      }
      const fn = inject('Date') as Function
      return (
        <div class="hare-datepicker">
          <dpTitle
            mode="date"
            currentYear={getCurrentYear.value}
            currentMonth={getCurrentMonth.value}
            onDoublePrev={toPrevYear}
            onSinglePrev={toPrevMonth}
            onSingleNext={toNextMonth}
            onDoubleNext={toNextYear}
          ></dpTitle>
          <div class="hare-datepicker__row">
            <dpRowTitle title={title}></dpRowTitle>
            <dpRowContent
              mode="date"
              prevData={prevDays.value}
              currentData={currentDays.value}
              nextData={nextDays.value}
              onPickDate={pickDate}
            ></dpRowContent>
            <dpRowFooter onPickToday={pickToday}></dpRowFooter>
          </div>
        </div>
      )
    }
  }
})
