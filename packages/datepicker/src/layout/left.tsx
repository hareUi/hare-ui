import { defineComponent, ref, inject } from 'vue'
import dayjs from 'dayjs/esm'
import { dpContext } from '../types'
export default defineComponent({
  name: 'dp-layout-right',
  emits: ['pickToday'],
  setup(props, { emit }) {
    const pickedDate = ref('')
    const { dpEmit: fn, curMode: mode } = inject('DP_CTX') as dpContext
    const pickToday = () => {
      //@ts-ignore
      pickedDate.value = dayjs() + ''
      fn(pickedDate.value)
    }
    return () => {
      return (
        <div class="h-dp__left" onClick={pickToday}>
          <span>今天</span>
        </div>
      )
    }
  }
})
