import { defineComponent } from 'vue'
import { emptyProps } from './types'

const NAME = 'h-empty'

export default defineComponent({
  name: NAME,
  props: emptyProps,
  setup(props, { slots }) {
    console.log(11111)

    return () => (
      <div class={NAME}>
        <div>
          <img src={props.image} alt="空状态" />
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
})
