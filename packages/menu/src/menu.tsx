import { computed, defineComponent, toRefs, provide, ref } from 'vue'
import { MenuContext, menuProps } from './types'

const NAME = 'h-menu'
export default defineComponent({
  name: NAME,
  props: menuProps,
  setup(props, { slots }) {
    const { defaultIndex, mode, onSelect } = toRefs(props)
    const menuContext: MenuContext = {
      index: ref(defaultIndex.value),
      onSelect: onSelect.value
    }
    const handleClick = (index: string) => {
      console.log('menu', index)
      menuContext.index.value = index
      // console.log(typeof index)
      if (menuContext.onSelect) {
        menuContext.onSelect(index)
      }
    }
    provide('MENU_CONTEXT', {
      index: menuContext.index,
      onSelect: handleClick
    })
    const classes = computed(() => [
      NAME,
      `${
        mode.value === 'horizontal'
          ? ` ${NAME}--horizontal `
          : ` ${NAME}--vertical `
      }`
    ])
    return () => (
      <div class={classes.value}>
        <div class="h-menu__head">
          {props.logo && (
            <a href={props.logo.target} class="h-menu-head__logo">
              <img src={props.logo.imgSrc} />
              <h1>{props.logo.text}</h1>
            </a>
          )}
        </div>
        <ul class="h-menu__main" data-testid="menu">
          {slots.default ? slots.default() : null}
        </ul>
        <div class="h-menu__foot">
          <i class="iconfont icon-outdent h-menu-foot-bar"></i>
        </div>
      </div>
    )
  }
})
