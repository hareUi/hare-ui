import { defineComponent, ref } from 'vue'
import { alertProps } from './types'

const NAME = 'h-alert'

export default defineComponent({
  name: NAME,
  props: alertProps,
  setup (props, { slots }) {
    // console.log(props)
    // 将类型参数与CSS类对应
    const classMap = {
      success: 'h-alert--success',
      warning: 'h-alert--warning',
      info: 'h-alert--info',
      error: 'h-alert--error'
    }
    // 获取CSS类名称
    const className = classMap[props.type]
    // 是否展示警告
    const showAlert = ref(true)
    // 消失动画是否开启
    const transition = ref(false)
    // 关闭警告
    const closeAlert = () => {
      transition.value = true
      setTimeout(() => {
        showAlert.value = false
      }, 300)
    }
    return () => (
      <div v-show={showAlert.value} class={[NAME, className, props.center ? 'h-alert--center' : '', transition.value ? 'h-alert--opacity' : '']}>
        {/* 没有描述的内容 */}
        <span v-show={!props.description} class={'h-alert--content'}>
          <em v-show={props.icon} class={['iconfont', `icon-${props.type}`]}></em>
          { props.title }
        </span>
        {/* 有描述的内容 */}
        <div v-show={props.description} class={['h-alert--content', 'h-alert--description']}>
          <i v-show={props.icon} class={['iconfont', `icon-${props.type}`]}></i>
          <div>
            <em>{props.title}</em>
            <span>{props.description}</span>
          </div>
        </div>
        {/* 关闭图标 */}
        <i v-show={ props.close && !props.closeText} class={['iconfont', 'icon-turnoff', 'h-alert--turnoff']} onClick={closeAlert}></i>
        {/* 自定义关闭文字 */}
        <i v-show={ props.closeText } class={['h-alert--turnoff']} onClick={ closeAlert }>{ props.closeText }</i>
      </div>
    )
  }
})
