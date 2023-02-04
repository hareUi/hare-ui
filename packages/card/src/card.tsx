import { defineComponent } from 'vue'
import { cardProps } from './types'

const NAME = 'h-card'

export default defineComponent({
  name: NAME,
  props: cardProps,
  setup(props, { slots }) {
    return () => (
      <div class={NAME}>
        <div>h-card</div>
      </div>
    )
  }
})
