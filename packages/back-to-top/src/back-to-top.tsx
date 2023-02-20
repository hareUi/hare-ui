import { computed, defineComponent, watch } from 'vue'
import { backToTopProps } from './types'

const NAME = 'h-back-to-top'

export default defineComponent({
  name: NAME,
  props: backToTopProps,
  setup(props, { slots }) {
    // 获取页面偏移量

    //  let a=document.getElementById('myBack')
    let scrolly = window.pageYOffset
    let a = computed(() => {
      console.log(document.body.scrollTop)
      if (scrolly > props.visiableHeight) {
        console.log('a')
        // a.style.display = 'absolute'
      } else {
        console.log('b')
        // a.style.display = 'none'
      }
    })
    const TestClick = () => {
      console.log('aaaa')
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
