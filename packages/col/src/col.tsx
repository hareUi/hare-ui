import { defineComponent, ref, computed } from 'vue'
import { colProps } from './types'

const NAME = 'h-col'

export default defineComponent({
  name: NAME,
  props: colProps,
  setup(props, { slots }) {
    const width = ref(
      props.span <= 24
        ? props.span % 1 == 0
          ? (100 / 24) * props.span + '%'
          : ''
        : ''
    )
    const offset = ref(
      props.offset <= 24
        ? props.offset % 1 == 0
          ? (100 / 24) * props.offset + '%'
          : ''
        : ''
    )
    const styles = computed(() => {
      width: '300px'
    })
    return () => (
      <div class={NAME} style="backgroundColor:red">
        1234
      </div>
    )
  }
})
