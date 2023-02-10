import { defineComponent } from 'vue'
import { emptyProps } from './types'

const NAME = 'h-empty'

export default defineComponent({
  name: NAME,
  props: emptyProps,
  setup(props, { slots }) {
    console.log(11111)
    // 不太理解插槽哇 如果想在这个组件里显示按钮什么的是需要额外注册嘛
    // 先写别的吧
    return () => (
      <div class={NAME}>
        <div class="inner">
          {/*                                                          !!!!!pxpxpxpxpxpxpx!!!!! */}
          <img
            src={props.image}
            alt="空状态"
            style={[`width:${props.imageSize}` + 'px']}
          />
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
})
