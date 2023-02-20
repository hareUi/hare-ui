import {
  defineComponent,
  computed,
  ComputedRef,
  HTMLAttributes,
  StyleValue,
  ref,
  VNode
} from 'vue'
import { rowProps } from './types'
import hCol from '../../col'

const NAME = 'h-row'

export default defineComponent({
  name: NAME,
  props: rowProps,
  components: { hCol },
  setup(props, { slots }) {
    const renderSlots = () => {
      const slotsList = [] as Array<VNode>
      slots.default &&
        slots.default().forEach((item, index) => {
          slotsList.push(item)
        })
      return slotsList
    }
    const rowGutter = ref(0)
    const colGutter = ref(0)
    const getGutter = () => {
      if (props.gutter instanceof Array) {
        rowGutter.value = props.gutter[0]
        colGutter.value = props.gutter[1]
      } else {
        rowGutter.value = props.gutter
      }
      return rowGutter.value
    }
    const rowStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: props.justify,
      alignItems: props.align,
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
      rowGap: getGutter()
    } as StyleValue
    // console.log(slots.default())
    return () => (
      <div class={NAME} style={rowStyle}>
        {renderSlots()}
      </div>
    )
  }
})
