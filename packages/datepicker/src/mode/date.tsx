import dpTitle from '../common/title'
import dpRowTitle from '../common/row-title'
import dpRowContent from '../common/row-content'
import dpRowFooter from '../common/row-footer'
import { defineComponent, inject, PropType, provide, Ref } from 'vue'
import { computed, ref } from 'vue'
import { dateFormat } from '../dateutils'
import * as dayjs from 'dayjs'
import { dpContext } from '../types'
const props = {
  title: Array<String>,
  data: Array as PropType<Array<Ref<Array<number | string>>>>
}
export default defineComponent({
  name: 'dateMode',
  emits: ['pickDate'],
  props,
  setup(props, ctx) {
    return () => {
      const pickedDate = ref(null)
      const {
        currentMonth,
        currentYear,
        dpEmit: fn
      } = inject('DP_CTX') as dpContext
      const pickDate = (item: string) => {
        let date: number
        if (item.startsWith('prev')) {
          date = parseInt(item.split('prev')[1])
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value - 1,
            date
          )
        } else if (item.startsWith('next')) {
          date = parseInt(item.split('next')[1])
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value + 1,
            date
          )
        } else {
          date = parseInt(item)
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value,
            date
          )
        }
        fn(pickedDate)
      }
      const pickType = (index: number, item: number | string): string => {
        switch (index) {
          case 0:
            return 'prev' + item
          case 1:
            return '' + item
          case 2:
            return 'next' + item
        }
      }
      const itemClass = (index, item) => {
        const list = ['h-dp-cell', 'h-dp-main-item']
        if (index % 2 === 0) {
          list.push('h-dp-cell-grey')
        } else {
          if (
            dayjs(`${currentYear.value}-${currentMonth.value}-${item}`).format(
              'YYYY-MM-DD'
            ) == dayjs().format('YYYY-MM-DD')
          ) {
            list.push('h-dp-cell-now')
          }
        }
        return list
      }
      return (
        <>
          <div class="h-dp__content-title">
            {props.title.map((item, index) => {
              return <div class="h-dp-title-item h-dp-cell">{item}</div>
            })}
          </div>
          <div>
            {/* {dayjs(`${currentYear.value}-${currentMonth.value}-${3}`)} */}
          </div>
          <div class="h-dp__content-date">
            {props.data.map((item, index) => {
              return item.value.map((item, _) => {
                return (
                  <div
                    onClick={() => pickDate(pickType(index, item))}
                    class={itemClass(index, item)}
                  >
                    {item}
                  </div>
                )
              })
            })}
          </div>
        </>
      )
    }
  }
})
