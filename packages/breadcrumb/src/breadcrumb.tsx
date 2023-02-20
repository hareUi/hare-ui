import { defineComponent } from 'vue'
import { breadcrumbProps } from './types'

const NAME = 'h-breadcrumb'

export default defineComponent({
  name: NAME,
  props: breadcrumbProps,
  setup(props, { slots }) {
    return () => (
      <div class={NAME}>
        <div>h-breadcrumb</div>
      </div>
    )
  }
})
