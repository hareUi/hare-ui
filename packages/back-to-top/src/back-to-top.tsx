import { computed, defineComponent, watch } from 'vue'
import { backToTopProps } from './types'

const NAME = 'h-back-to-top'

export default defineComponent({
  name: NAME,
  props: backToTopProps,
  setup(props, { slots }) {
    const TestClick = () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    return () => (
      <div
        id="myBack"
        class={NAME}
        onClick={TestClick}
        style={[`right:${props.right}` + 'px', `bottom:${props.bottom}` + 'px']}
      >
        <div class="inner">
          <a href="#">
            <img src="/back.png" alt="" />
          </a>
        </div>
      </div>
    )
  }
})
