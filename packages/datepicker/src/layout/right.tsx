import { defineComponent, ref, inject } from 'vue'
import dayjs from 'dayjs'
import { dpContext } from '../types'
export default defineComponent({
  name: 'dp-layout-right',
  emits: ['pickToday'],
  setup(props, { emit }) {
    const pickedDate = ref(null)
    const { dpEmit: fn, curMode: mode } = inject('DP_CTX') as dpContext
    const hourList = ref()
    const itemClick = (index: number) => {
      hourList.value.scrollTo(0, hourList.value.children[index].offsetTop)
    }
    return () => {
      return (
        <div class="h-dp__right">
          <div class="h-dp__row" ref={hourList}>
            {new Array(24).fill(0).map((item, index) => {
              return <div onClick={() => itemClick(index)}>{index}</div>
            })}
          </div>
          <div class="h-dp__row">
            {new Array(60).fill(0).map((item, index) => {
              return <div>{index}</div>
            })}
          </div>
          <div class="h-dp__row">
            {new Array(60).fill(0).map((item, index) => {
              return <div>{index}</div>
            })}
          </div>
        </div>
      )
    }
  }
})
