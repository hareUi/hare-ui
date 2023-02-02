import {
  defineComponent,
  computed,
  inject,
  toRefs,
  Component,
  VNode
} from 'vue'
import { MenuContext, subMenuProps } from './types'
import { MenuItemProps } from '../../menu-item/src/types'

const NAME = 'h-sub-menu'
const CLASSNAME = 'h-menu__item'
export default defineComponent({
  name: NAME,
  props: subMenuProps,
  setup(props, { slots }) {
    const { index, title, disabled } = toRefs(props)
    const menuContext = inject('MENU_CONTEXT') as MenuContext
    const handleClick = () => {
      if (menuContext.onSelect && !disabled.value) {
        menuContext.onSelect(index.value)
      }
    }
    const classes = computed(() => [
      CLASSNAME,
      `${disabled.value ? `${CLASSNAME}--disabled` : ''}`,
      `${menuContext.index.value === index.value ? `${CLASSNAME}--active` : ''}`
    ])
    const renderChildren = () => {
      if (slots.default) {
        const childrenComps = slots.default().map((child, index) => {
          // @ts-ignore
          if (child.type.name === 'h-menu-item') {
            return child
          } else {
            console.warn('Warning: h-sub-menu的子组件应为h-menu-item')
          }
          return null
        })
        return <ul class="h-sub-menu">{childrenComps}</ul>
      }
    }
    // console.log(slots.default());

    return () => (
      <li class={classes.value} key={index.value}>
        <div class={`${NAME}__title`}>{title.value}</div>
        {renderChildren()}
      </li>
    )
  }
})
