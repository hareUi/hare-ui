import { defineComponent, ref, inject } from 'vue'
import * as dayjs from 'dayjs'
import { dpContext } from '../types'
export default defineComponent({
  name: 'dp-layout-footer',
  emits: ['pickToday'],
  setup(props, { emit }) {
    const pickedDate = ref(null)
    const { dpEmit: fn, curMode: mode } = inject('DP_CTX') as dpContext
    const pickToday = () => {
      pickedDate.value = dayjs()
      fn(pickedDate)
    }
    return () => {
      return (
        <div class="h-dp__footer" onClick={pickToday}>
          <span>今天</span>
        </div>
      )
    }
  }
})
