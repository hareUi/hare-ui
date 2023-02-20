import { defineComponent, ref, computed, StyleValue, ComputedRef } from 'vue'
import { colProps } from './types'
const NAME = 'h-col'

export default defineComponent({
  name: NAME,
  props: colProps,
  setup(props, { slots }) {
    const width = ref(
      props.span <= 24
        ? props.span % 1 === 0
          ? (100 / 24) * props.span + '%'
          : ''
        : ''
    )
    const colStyles = computed(() => {
      return { width: width.value }
    }) as ComputedRef<StyleValue>
    return () => (
      <div class={NAME} style={colStyles.value}>
        {slots.default ? slots.default() : null}
      </div>
    )
  }
})
