import {
  computed,
  defineComponent,
  toRefs,
  inject,
  Ref,
  ref,
  nextTick,
  provide,
  onMounted
} from 'vue'
import { MenuContext, subMenuProps } from './types'

const NAME = 'h-submenu'
const CLASSNAME = 'h-submenu__title'
export default defineComponent({
  name: NAME,
  props: subMenuProps,
  setup(props, { slots }) {
    onMounted(() => {
      console.log(sub.value.children)
    })
    const { index, disabled } = toRefs(props)
    const menuContext = inject('MENU_CONTEXT') as MenuContext
    const handleClick = (e: Event) => {
      // console.log(sub.value.children)
      e.stopPropagation()
      if (menuContext.onSelect && !disabled.value) {
        menuContext.onSelect(index.value)
      }
    }
    const hasChildSelected = () => {
      let flag = false
      nextTick(() => {
        for (let item of sub.value.children) {
          flag = item.classList.contains('h-menu-item--selected')
          if (flag) break
        }
      })
      return flag
    }
    const sub = ref()
    const classes = computed(() => [
      NAME,
      `${disabled.value ? `${NAME}--disabled` : ''}`,
      `${
        menuContext.index.value === index.value || hasChildSelected()
          ? `${NAME}--selected`
          : ''
      }`
    ])
    const iconClass = computed(() => ['iconfont', 'icon-' + props.icon])
    return () => (
      <li class={classes.value} onClick={handleClick}>
        <div class="h-submenu__title">
          <i class={iconClass.value}></i>
          <span>{props.title}</span>
          {/* <i class="iconfont icon-arrowup"></i> */}
        </div>
        <ul class="h-submenu__sub" ref={sub}>
          {slots.default && slots.default()}
        </ul>
      </li>
    )
  }
})
