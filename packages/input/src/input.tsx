import { computed, defineComponent, inject, toRefs } from 'vue'
import { inputProps } from './types'
import { FormItemContext } from '../../form-item/src/types'

const NAME = 'h-input'

export default defineComponent({
  name: NAME,
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX', null) as FormItemContext|null
    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      formItem?.validate()
    }
    console.log(props.placeholder)
    const wrapperClasses = computed(() => [
      `${NAME}__wrapper`,
      `${NAME}-size-${props.size}`,
      `${props.bordered ? '' : `${NAME}__wrapper-noborder`} `,
      `${props.disabled ? `${NAME}__wrapper-disabled` : ''} `
    ])
    const inputClasses = computed(() => [
      `${NAME}__input`,
      `${props.disabled ? `${NAME}__input-disabled` : ''} `
    ])
    return () => (
      <div class={wrapperClasses.value}>
        {slots.prefix && <div class="h-input__prefix">{ slots.prefix() }</div> }
        <input class={inputClasses.value} disabled={props.disabled} placeholder={props.placeholder} value={props.modelValue} onInput={onInput} type={props.type} />
        {slots.suffix && <div class="h-input__suffix">{ slots.prefix() }</div> }
      </div>
    )
  }
})
