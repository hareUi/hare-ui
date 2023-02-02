import {
  defineComponent,
  computed,
  ref,
  onMounted,
  inject,
  provide,
  Ref,
  onUnmounted,
  nextTick
} from 'vue'
import * as dayjs from 'dayjs'
import { datepickerProps } from './types'
import dateMode from './mode/date'
import weekMode from './mode/week'
import yearMode from './mode/year'
const NAME = 'h-datepicker'

export default defineComponent({
  name: NAME,
  props: datepickerProps,
  components: {
    dateMode,
    weekMode,
    yearMode
  },
  setup(props, ctx) {
    // console.log(props.mode);
    onMounted(() => {
      document.addEventListener('click', closeMenu)
    })
    const elem = ref()
    const closeMenu = (e: PointerEvent) => {
      if (!elem.value.contains(e.target)) {
        if (mainIsActive.value) {
          mainIsActive.value = false
        }
      }
    }
    onUnmounted(() => {
      document.removeEventListener('click', closeMenu)
    })
    const pickedDate = ref('')
    const dpContext = (e: Ref<string>) => {
      if (e) {
        mainIsActive.value = false
      }
      pickedDate.value = dayjs(e.value).format(props.format)
    }
    provide('Date', dpContext)
    const renderMode = () => {
      let Mode
      switch (props.mode) {
        case 'date':
          Mode = <dateMode></dateMode>
          break
        case 'week':
          return <weekMode></weekMode>
        case 'year':
          return <yearMode></yearMode>
      }
      return Mode
    }
    // 控制下拉日历是否显示
    const mainIsActive = ref(false)
    const handleInputClick = e => {
      // e.stopPropagation()
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
      <div ref={elem} class={classes.value}>
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
