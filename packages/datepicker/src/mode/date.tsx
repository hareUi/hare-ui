import { f } from 'vitest/dist/index-50755efe'
import { defineComponent, inject, provide } from 'vue'
import { computed, ref } from 'vue'
const title = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']
const currentDate = ref(new Date().getDate())
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

export default defineComponent({
  name: 'dateMode',
  emits: ['pickDate'],
  render() {
    const getCurrentYear = computed(() => {
      return new Date(currentYear.value, currentMonth.value).toLocaleDateString(
        'default',
        {
          year: 'numeric'
        }
      )
    })
    const getCurrentMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value).toLocaleDateString(
        'default',
        {
          month: 'short'
        }
      )
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
      let date
      if (item.startsWith('pre')) {
        date = parseInt(item.split('pre')[1])
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
      pickedDate.value = new Date(
        currentYear.value,
        currentMonth.value,
        currentDate.value
      ).toLocaleDateString('default')
      fn(pickedDate)
    }
    const fn = inject('Date') as Function
    return (
      <div class="calendar">
        <div class="calendar__title">
          <div class="arrow arrow-left" onClick={toPrevYear}>
            &lt;&lt;
          </div>
          <div class="arrow arrow-left" onClick={toPrevMonth}>
            &lt;
          </div>
          <div class="date">
            {getCurrentYear.value} {getCurrentMonth.value}
          </div>
          <div class="arrow arrow-right" onClick={toNextMonth}>
            &gt;
          </div>
          <div class="arrow arrow-right" onClick={toNextYear}>
            &gt;&gt;
          </div>
        </div>
        <div class="calendar__content">
          <div class="row title">
            {title.map((item, index) => {
              return <span key={item}>{item}</span>
            })}
          </div>
          <div class="row content">
            {prevDays.value.map((item, index) => {
              return (
                <span
                  class="grey"
                  key={'pre' + item}
                  onClick={() => pickDate('pre' + item)}
                >
                  {item}
                </span>
              )
            })}
            {currentDays.value.map((item, index) => {
              return (
                <span key={'' + item} onClick={() => pickDate('' + item)}>
                  {item}
                </span>
              )
            })}
            {nextDays.value.map((item, index) => {
              return (
                <span
                  class="grey"
                  key={'next' + item}
                  onClick={() => pickDate('next' + item)}
                >
                  {item}
                </span>
              )
            })}
          </div>
          <div class="row footer" onClick={pickToday}>
            <span>今天</span>
          </div>
        </div>
      </div>
    )
  }
})
