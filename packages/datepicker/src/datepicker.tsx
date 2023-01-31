import {
  defineComponent,
  computed,
  ref,
  onMounted,
  inject,
  provide,
  Ref
} from 'vue'
import { datepickerProps } from './types'
import dateMode from './mode/date'
import weekMode from './mode/week'
const NAME = 'h-datepicker'

export default defineComponent({
  name: NAME,
  props: datepickerProps,
  setup(props, ctx) {
    // console.log(props.mode);
    const pickedDate = ref('')
    const dpContext = (e: Ref<string>) => {
      if (e) {
        mainIsActive.value = false
      }
      pickedDate.value = e.value
    }
    provide('Date', dpContext)
    const renderMode = () => {
      let Mode
      switch (props.mode) {
        case 'date':
          Mode = <dateMode></dateMode>
          break
        case 'week':
        default:
          Mode = <weekMode></weekMode>
      }
      return Mode
    }
    // 控制下拉日历是否显示
    const mainIsActive = ref(false)
    const handleInputClick = () => {
      mainIsActive.value = !mainIsActive.value
    }
    // main的类
    const mainClasses = computed(() => [
      `${NAME}__main`,
      mainIsActive.value ? `${NAME}__main--active` : ''
    ])

    // wrapper的类
    const sizeClass = computed(() => {
      return props.size !== '' ? `${NAME}--${props.size}` : NAME
    })
    const classes = computed(() => {
      return sizeClass.value
    })
    return () => (
      <div class={classes.value}>
        <input
          value={pickedDate.value}
          onClick={handleInputClick}
          class={`${NAME}__input`}
          type="text"
        />
        <div class={mainClasses.value}>{renderMode()}</div>
      </div>
    )
  }
})
