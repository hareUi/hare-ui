import { defineComponent, ref, defineEmits } from 'vue'
import { switchProps } from './types'

const NAME = 'h-switch'

export default defineComponent({
  name: NAME,
  props: switchProps,
  setup(props, { slots, emit }) {
    // 显示switch状态指向的字体
    const showText = props.activeText || props.inactiveText
    // 改变switch状态
    const handleClick = () => {
      emit('update:modelValue', !props.modelValue)
    }
    return () => (
      <div
        class={NAME}
        onClick={handleClick}
        style={{ '--active-color': props.activeTextColor }}
      >
        <span
          v-show={showText}
          class={[
            'h-switch__label--right',
            !props.modelValue ? 'h-switch__label--color' : ''
          ]}
        >
          {props.inactiveText}
        </span>
        <span
          class="h-switch__core"
          style={[
            props.modelValue
              ? { '--switch-color': props.activeColor }
              : { '--switch-color': props.inactiveColor },
            { '--switch-width': props.width }
          ]}
        >
          <span
            class={[props.modelValue ? 'is_checked' : '', 'h-switch__button']}
          ></span>
        </span>
        <span
          v-show={showText}
          class={[
            'h-switch__label--left',
            props.modelValue ? 'h-switch__label--color' : ''
          ]}
        >
          {props.activeText}
        </span>
        <input
          type="checkbox"
          class="h-switch__input"
          name={props.name}
          value={props.modelValue}
        />
      </div>
    )
  }
})
