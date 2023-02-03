import {
  defineComponent,
  computed,
  ref,
  onMounted,
  provide,
  Ref,
  onUnmounted,
  toRefs,
  nextTick
} from 'vue'
import * as dayjs from 'dayjs'
import { datepickerProps, IDatePickerMode } from './types'
import dateMode from './mode/date'
import weekMode from './mode/week'
import yearMode from './mode/year'
import {
  getCurrentYear,
  getCurrentDate,
  getCurrentMonth,
  getPrevDaysList,
  getCurrentDaysList,
  getNextDaysList
} from './dateutils'
import dpHeader from './layout/header'
import dpContent from './layout/content'
import dpFooter from './layout/footer'
import { genTenYearsList } from './dateutils'
const NAME = 'h-datepicker'

export default defineComponent({
  name: NAME,
  props: datepickerProps,
  components: {
    dateMode,
    weekMode,
    yearMode,
    dpHeader,
    dpContent,
    dpFooter
  },
  setup(props, ctx) {
    /***
     * 所有date数据应该由主组件保管，方便全局的数据一致
     */
    const currentYear = ref(getCurrentYear())
    const currentMonth = ref(getCurrentMonth() + 1)
    const currentDate = ref(getCurrentDate())
    const prevDaysList = computed(() => {
      return getPrevDaysList(currentYear.value, currentMonth.value)
    })
    const curDaysList = computed(() => {
      return getCurrentDaysList(currentYear.value, currentMonth.value)
    })
    const nextDaysList = computed(() => {
      return getNextDaysList(currentYear.value, currentMonth.value)
    })
    const tenYearsList = computed(() => {
      return genTenYearsList(currentYear.value)
    })
    console.log(currentYear.value, currentMonth.value, currentDate.value)

    /**
     * 到下一个文档注释为止，与下拉框是否显示和一些基础样式相关，已完成。之后可以*抽离出来复用
     */
    onMounted(() => {
      document.addEventListener('click', closeMenu)
    })
    const wrapper = ref(null)
    const closeMenu = e => {
      if (
        !(
          wrapper.value.contains(e.target) ||
          e.target.classList.contains('h-dp__header-btn')
        )
      ) {
        if (mainIsActive.value) {
          mainIsActive.value = false
        }
      }
    }
    onUnmounted(() => {
      document.removeEventListener('click', closeMenu)
    })
    // 控制下拉日历是否显示
    const mainIsActive = ref(false)
    const handleInputClick = () => {
      curMode.value = props.mode
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
    /**
     * 子组件选择后回填，通过datepickerContext将子组件操作的结果返回给主组件
     */
    const pickedDate = ref('')
    const dpEmit = (e: Ref<string>) => {
      if (mode.value === curMode.value) {
        mainIsActive.value = false
      }
      if (mode.value === 'date') {
        if (curMode.value === 'date') {
          pickedDate.value = dayjs(e.value).format(props.format)
          currentDate.value = dayjs(e.value).date()
          currentMonth.value = dayjs(e.value).month() + 1
          currentYear.value = dayjs(e.value).year()
        }
        if (curMode.value === 'year') {
          console.log(e)
          currentDate.value = dayjs(e.value).date()
          pickedDate.value = dayjs(e.value).year() + '-'
        }
      }
    }
    /**
     * 渲染的类型,初始化为props的mode类型,之后可以根据子组件的操作发生更改
     */
    const { mode } = toRefs(props)
    const curMode = ref(mode.value)
    const changeMode = (e: Ref<IDatePickerMode>) => {
      curMode.value = e.value
    }
    /***
     * 向下透传的东西有
     * 1.当前的日期
     * 2.改变主组件mode的方法
     */
    provide('DP_CTX', {
      currentDate,
      currentYear,
      currentMonth,
      dpEmit,
      curMode
    })
    /***
     * 操作改变date和mode
     */
    const toPrevMonth = () => {
      if (currentMonth.value === 0) {
        currentYear.value--
        currentMonth.value = 11
      } else {
        currentMonth.value--
      }
    }
    const toNextMonth = () => {
      if (currentMonth.value === 11) {
        currentYear.value++
        currentMonth.value = 0
      } else {
        currentMonth.value++
      }
    }
    const toPrevYear = () => {
      currentYear.value--
    }
    const toNextYear = () => {
      currentYear.value++
    }
    const singlePrev = () => toPrevMonth()
    const singleNext = () => toNextMonth()
    const doublePrev = () => {
      if (curMode.value === 'date' || curMode.value === 'mouth') {
        toPrevYear()
      }
    }
    const doubleNext = () => {
      if (curMode.value === 'date' || curMode.value === 'mouth') {
        toNextYear()
      }
    }

    const toYearMode = () => {
      curMode.value = 'year'
    }
    const contentTitle = ['一', '二', '三', '四', '五', '六', '日']
    return () => (
      <div ref={wrapper} class={classes.value}>
        <input
          value={pickedDate.value}
          onClick={handleInputClick}
          class={`${NAME}__input`}
          type="text"
        />
        <div class={mainClasses.value}>
          <dpHeader
            onSinglePrev={singlePrev}
            onSingleNext={singleNext}
            onDoublePrev={doublePrev}
            onDoubleNext={doubleNext}
            currentYear={currentYear.value}
            currentMonth={currentMonth.value}
            onSecondhandYear={toYearMode}
          ></dpHeader>
          <dpContent
            title={contentTitle}
            data={[prevDaysList, curDaysList, nextDaysList]}
          ></dpContent>
          {curMode.value === 'date' ? <dpFooter></dpFooter> : ''}
        </div>
        {/* <div class={mainClasses.value}>{renderMode()}</div> */}
      </div>
    )
  }
})
