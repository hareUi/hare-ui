import { defineComponent } from 'vue'
import { backToTopProps } from './types'

const NAME = 'h-back-to-top'

export default defineComponent({
  name: NAME,
  props: backToTopProps,
  setup(props, { slots }) {
    return () => (
      <div class={NAME}>
        <div>h-back-to-top</div>
      </div>
    )
  }
})
