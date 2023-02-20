import { defineComponent, onMounted, ref } from 'vue'
import { messageProps } from './types'

const NAME = 'h-message'

export default defineComponent({
  name: NAME,
  props: messageProps,
  setup(props, { slots, emit }) {
    const visible = ref(true)
    const fade = ref(true)
    let timer1 = null
    let timer2 = null
    const startTimer = () => {
      timer1 = setTimeout(() => {
        fade.value = true
        clearTimeout(timer1)
        clearTimeout(timer2)
        props.onClose()
        const timer3 = setTimeout(() => {
          emit('destroy')
        }, 400)
      }, props.duration)
    }

    onMounted(() => {
      startTimer()
      timer2 = setTimeout(() => {
        fade.value = false
      }, 10)
    })

    return () => (
      <div
        v-show={visible.value}
        class={[
          NAME,
          `${NAME}--${props.type}`,
          props.center ? 'is-center' : '',
          fade.value ? 'h-message-fade' : ''
        ]}
        style={{ top: `${props.offset}px` }}
      >
        {props.message}
      </div>
    )
  }
})
