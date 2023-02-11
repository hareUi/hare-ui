import { defineComponent } from 'vue'
import { dividerProps } from './types'

const NAME = 'h-divider'

export default defineComponent({
  name: NAME,
  props: dividerProps,
  setup(props, { slots }) {
    return () => (
      <div class={NAME}>
        <div>h-divider</div>
      </div>
    )
  }
})
