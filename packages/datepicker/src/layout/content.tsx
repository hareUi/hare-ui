import { defineComponent, inject, PropType, ref, Ref } from 'vue'
import dateMode from '../mode/date'
import yearMode from '../mode/year'
import { dpContext } from '../types'
type mode = 'year' | 'month' | 'date' | 'week'
const props = {
  title: Array<String>,
  data: Array as PropType<Array<Ref<Array<number | string>>>>,
  mode: String as PropType<mode>
}
export default defineComponent({
  name: 'dp-layout-content',
  props,
  components: { dateMode, yearMode },
  setup(props, { emit }) {
    const { curMode: mode } = inject('DP_CTX') as dpContext
    const renderMode = () => {
      switch (mode.value) {
        case 'date':
          return <dateMode title={props.title} data={props.data}></dateMode>
        case 'week':
          return <weekMode></weekMode>
        case 'year':
          return <yearMode></yearMode>
      }
    }
    return () => {
      return <div class="h-dp__content">{renderMode()}</div>
    }
  }
})
