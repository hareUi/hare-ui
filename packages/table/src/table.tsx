import { defineComponent } from 'vue'
import { tableProps } from './types'

const NAME = 'h-table'

export default defineComponent({
  name: NAME,
  props: tableProps,
  setup(props, { slots }) {
    return () => (
      <div class={NAME}>
        <div>h-table</div>
      </div>
    )
  }
})
