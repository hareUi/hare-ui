import { call } from '../../utils/src/call'
import { defineComponent, toRefs } from 'vue'
import { switchProps } from './types'

const NAME = 'h-switch'

export default defineComponent({
  name: NAME,
  props: switchProps,
  setup (props, { slots }) {
    const { activeColor, inactiveColor, modelvalue } = toRefs(props)
    const changeState = (e: MouseEvent) => {
      if (props.onClick) call(props.onClick, e)
    }
    return () => (
      <input type="checkbox" class={'h-switch ' + modelvalue.value ? 'h-switch_check' : 'h-switch_uncheck'} onClick={ changeState } />
    )
  }
})
