import { defineComponent, inject, PropType, ref, Ref } from 'vue'
import dateMode from '../mode/date'
import yearMode from '../mode/year'
import monthMode from '../mode/month'
import { dpContext } from '../types'
import weekMode from '../mode/week'
type mode = 'year' | 'month' | 'date' | 'week'
const props = {
  title: Array<String>,
  data: Array as PropType<Array<Ref<Array<number | string>>>>,
  mode: String as PropType<mode>
}
export default defineComponent({
  name: 'dp-layout-content',
  emit: ['hoverEmit'],
  props,
  components: { dateMode, yearMode, monthMode, weekMode },
  setup(props, { emit }) {
    const { curMode: mode } = inject('DP_CTX') as dpContext
    const hoverEmit = (args: any) => {
      emit('hoverEmit', args)
    }
    const renderMode = () => {
      if (!props.data) return
      switch (mode.value) {
        case 'date':
        case 'datetime':
          return (
            <dateMode
              onHoverEmit={(args: string) => hoverEmit(args)}
              title={props.title}
              data={props.data}
            ></dateMode>
          )
        case 'month':
          return (
            <monthMode
              onHoverEmit={(args: string) => hoverEmit(args)}
            ></monthMode>
          )
        case 'year':
          return (
            <yearMode
              onHoverEmit={(args: string) => hoverEmit(args)}
              data={props.data[0]}
            ></yearMode>
          )
        case 'week':
          return <weekMode></weekMode>
      }
    }
    return () => {
      return <div class="h-dp__content">{renderMode()}</div>
    }
  }
})
