import { computed, defineComponent, inject, ref } from 'vue'
import { inputProps } from './types'
import { FormItemContext } from '../../form-item/src/types'

const NAME = 'h-input'

export default defineComponent({
  name: NAME,
  props: inputProps,
  emits: [
    'update:modelValue',
    'input',
    'clear',
    'blur',
    'change',
    'pressEnter',
    'focus'
  ],
  setup(props, { emit, slots, attrs }) {
    const inputRef = ref<HTMLInputElement>()
    // 注入校验方法,如果使用者没用form包裹,使用默认值null
    const formItem = inject('FORM_ITEM_CTX', null) as FormItemContext | null
    // 记录输入的值
    const uncontrolledValue = ref(props.defaultValue)
    const getValue = computed(() => {
      return props.modelValue ? props.modelValue : uncontrolledValue.value
    })
    // 判断是否获得焦点
    const focused = ref(false)
    // 获取上一次值
    let preValue = getValue.value
    /**
     * 判断是否符合一键清空的条件
     */
    const isShowClear = computed(
      () => props.clearable && !props.disabled && getValue.value
    )
    // onInput后input值更新时调用
    const updateValue = (value: string) => {
      uncontrolledValue.value = value
      emit('update:modelValue', value)
    }
    // 输入时调用updateValue,并向父级传入事件
    const onInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      updateValue(value)
      emit('input', value, e)
      // emit('update:modelValue', value)
    }
    const onClear = (e: Event) => {
      updateValue('')
      emit('clear', e)
    }
    const handleChange = (currentValue: string, e: Event) => {
      if (currentValue !== preValue) {
        preValue = currentValue
        emit('change', currentValue, e)
      }
    }
    const onBlur = (e: FocusEvent) => {
      focused.value = false
      handleChange(getValue.value, e)
      emit('blur', e)
      formItem?.validate()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      const keyCode = e.key || e.code
      if (keyCode === 'Enter') {
        handleChange(getValue.value, e)
        emit('pressEnter', e)
      }
    }
    const onFocus = (e: FocusEvent) => {
      focused.value = true
      emit('focus', e)
    }
    // 外包装class
    const wrapperClasses = computed(() => [
      `${NAME}__wrapper`,
      `${NAME}-size-${props.size}`,
      `${props.bordered ? '' : `${NAME}__wrapper-noborder`} `,
      `${props.disabled ? `${NAME}__wrapper-disabled` : ''} `
    ])
    // 内层input class
    const inputClasses = computed(() => [
      `${NAME}__input`,
      `${props.disabled ? `${NAME}__input-disabled` : ''} `
    ])
    // 控制密码是否显示
    const isShowPwd = ref(false)
    const currentType = ref(props.type)
    const handleIsShowPwd = () => {
      console.log(isShowPwd.value)

      currentType.value =
        currentType.value === 'password' ? props.type : 'password'
      isShowPwd.value = !isShowPwd.value
      showPwdIconType()
    }
    const showPwdIconType = () => {
      return isShowPwd.value ? 'eye-fill' : 'eye-close'
    }
    return () => (
      <div class={wrapperClasses.value}>
        {props.prefixIcon && (
          <div class="h-input__prefix">
            {<h-icon name={props.prefixIcon}></h-icon>}
          </div>
        )}
        {slots.prefix && <div class="h-input__prefix">{slots.prefix()}</div>}
        <input
          ref="inputRef"
          class={inputClasses.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          value={getValue.value}
          onInput={onInput}
          onBlur={onBlur}
          onKeydown={onKeyDown}
          onFocus={onFocus}
          type={currentType.value}
        />
        {slots.suffix && <div class="h-input__suffix">{slots.suffix()}</div>}
        {props.suffixIcon && (
          <div class="h-input__suffix">
            {<h-icon name={props.suffixIcon}></h-icon>}
          </div>
        )}
        {isShowClear.value && <h-icon onClick={onClear} name="close"></h-icon>}
        {/* {renderIsShowPwd()} */}
        {props.showPassword && (
          <h-icon onClick={handleIsShowPwd} name={showPwdIconType()}></h-icon>
        )}
      </div>
    )
  }
})
