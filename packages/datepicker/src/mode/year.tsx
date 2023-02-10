import { defineComponent, inject, PropType, Ref } from 'vue'
import dayjs from 'dayjs'
import { dpContext } from '../types'
const props = {
  data: Object as PropType<Ref<Array<number | string>>>
}
export default defineComponent({
  name: 'yearMode',
  props,
  emits: ['hoverEmit'],
  setup(props, { emit }) {
    const { currentYear, dpEmit: fn } = inject('DP_CTX') as dpContext
    return () => {
      const pickYear = (item: number) => {
        fn(item + '')
      }
      const itemClasses = (item: number, index: number) => {
        const list = ['h-dp-cell']
        if (index === 0 || index === props.data!.value.length - 1) {
          list.push('h-dp-cell--grey')
        }
        if (item === dayjs().year()) {
          list.push('h-dp-cell--now')
        }
        return list
      }
      const hoverEmit = (item: number) => {
        emit('hoverEmit', item)
      }
      return (
        <div class="h-dp__content-year">
          {props.data!.value.map((item, index) => {
            return (
              <div
                onMouseover={() => hoverEmit(item as number)}
                onClick={() => pickYear(item as number)}
                class={itemClasses(item as number, index)}
              >
                {item}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
