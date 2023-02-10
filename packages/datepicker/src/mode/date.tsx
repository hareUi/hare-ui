import { defineComponent, inject, PropType, provide, Ref } from 'vue'
import { computed, ref } from 'vue'
import { dateFormat } from '../dateutils'
import dayjs from 'dayjs/esm/index.js'
import { dpContext } from '../types'
const props = {
  title: Array<String>,
  data: Array as PropType<Array<Ref<Array<number | string>>>>
}
export default defineComponent({
  name: 'dateMode',
  emits: ['hoverEmit'],
  props,
  setup(props, { emit }) {
    return () => {
      const pickedDate = ref('') as Ref<string>
      const {
        pickedDate: activeDate,
        currentMonth,
        currentYear,
        dpEmit: fn,
        format
      } = inject('DP_CTX') as dpContext
      const pickDate = (item: string) => {
        let date: number
        if (item.startsWith('prev')) {
          date = parseInt(item.split('prev')[1])
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value,
            date
          )
        } else if (item.startsWith('next')) {
          date = parseInt(item.split('next')[1])
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value + 2,
            date
          )
        } else {
          date = parseInt(item)
          pickedDate.value = dateFormat(
            currentYear.value,
            currentMonth.value + 1,
            date
          )
        }
        fn(pickedDate.value)
      }
      const pickType = (index: 0 | 1 | 2, item: number | string): string => {
        switch (index) {
          case 0:
            return 'prev' + item
          case 1:
            return '' + item
          case 2:
            return 'next' + item
        }
      }
      const itemClass = (index: number, item: string | number) => {
        const list = ['h-dp-cell', 'h-dp-main-item']
        const allItem = dayjs(
          `${currentYear.value}-${currentMonth.value + 1}-${item}`
        ).format(format)
        if (index % 2 === 0) {
          list.push('h-dp-cell--grey')
        } else {
          if (allItem === dayjs().format(format)) {
            list.push('h-dp-cell--now')
          }
          if (allItem === activeDate.value) {
            list.push('h-dp-cell--active')
          }
        }

        return list
      }
      const hoverEmit = (item: string | number) => {
        emit(
          'hoverEmit',
          dayjs(`${currentYear.value}-${currentMonth.value}-${item}`).format(
            format
          )
        )
      }
      return (
        <>
          <div class="h-dp__content-title">
            {props.title!.map((item, index) => {
              return <div class="h-dp-title-item h-dp-cell">{item}</div>
            })}
          </div>
          <div class="h-dp__content-date">
            {props.data!.map((item, index) => {
              return item.value.map((item, _) => {
                return (
                  <div
                    onMouseover={() => hoverEmit(item)}
                    onClick={() => pickDate(pickType(index as 0 | 1 | 2, item))}
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
