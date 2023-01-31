import { defineComponent } from 'vue'
import { switchProps } from './types'

const NAME = 'h-switch'

export default defineComponent({
  name: NAME,
  props: switchProps,
  setup (props, { slots }) {
    return () => (
      <div class={ NAME }>
        <input class={'h-switch'} type="checkbox"></input>
      </div>
    )
  }
})
