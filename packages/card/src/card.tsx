import { defineComponent, ref } from 'vue'
import { cardProps } from './types'

const NAME = 'h-card'

export default defineComponent({
  name: NAME,
  props: cardProps,

  setup(props, { slots }) {
    console.log(props)

    return () => (
      <div class={[`shadow-${props.shadow}`]}>
        <div>{slots.default ? slots.default() : null}</div>
      </div>
    )
  }
})
