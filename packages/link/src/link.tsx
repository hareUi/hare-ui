import { computed, defineComponent, toRefs } from 'vue'
import { linkProps } from './types'

const NAME = 'h-link'

export default defineComponent({
  name: NAME,
  props: linkProps,
  setup(props, { slots }) {
    const { type, underline, disabled, href } = toRefs(props)
    const classes = computed(() => [
      NAME,
      `${NAME}--${type.value}`,
      underline.value ? 'is-underline' : '',
      disabled.value ? 'is-disabled' : ''
    ])

    return () => {
      const defaultSlot = slots.default ? slots.default() : type.value

      return (
        <a class={classes.value} href={disabled.value ? null : href.value}>
          {defaultSlot}
        </a>
      )
    }
  }
})
