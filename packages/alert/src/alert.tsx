import { defineComponent } from 'vue'
import { alertProps } from './types'

const NAME = 'h-alert'

export default defineComponent({
  name: NAME,
  props: alertProps,
  setup (props, { slots }) {
    const classMap = {
      success: 'h-alert--success',
      warning: 'h-alert--warning',
      info: 'h-alert--info',
      error: 'h-alert--error'
    }
    const className = classMap[props.type]
    return () => (
      <div class={ [NAME, className] }>
        <span class={ 'h-alert--content' }>
          { props.title }
        </span>
      </div>
    )
  }
})
