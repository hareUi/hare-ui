import { computed, defineComponent, toRefs, inject, Ref, ref } from 'vue'
import { MenuContext, menuItemProps } from './types'

const NAME = 'h-menu-item'
const CLASSNAME = 'h-menu-item__title'
export default defineComponent({
  name: NAME,
  props: menuItemProps,
  emits: ['itemClick'],
  setup(props, { slots, emit }) {
    const { index, disabled } = toRefs(props)
    const menuContext = inject('MENU_CONTEXT') as MenuContext
    const handleClick = (e: Event) => {
      // console.log(item.value.classList.contains('h-menu-item--selected'))
      emit('itemClick', props.index)
      e.stopPropagation()
      if (menuContext.onSelect && !disabled.value) {
        menuContext.onSelect(index.value)
      }
    }
    const item = ref()
    const classes = computed(() => [
      NAME,
      `${disabled.value ? `${NAME}--disabled` : ''}`,
      `${menuContext.index.value === index.value ? `${NAME}--selected` : ''}`
    ])
    const iconClass = computed(() => ['iconfont', 'icon-' + props.icon])
    return () => (
      <li class={classes.value} ref={item} onClick={handleClick}>
        <div class="h-menu-item__title">
          <i class={iconClass.value}></i>
          <span>{slots.default && slots.default()}</span>
        </div>
      </li>
    )
  }
})
