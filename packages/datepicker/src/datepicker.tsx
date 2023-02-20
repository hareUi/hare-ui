import {
  defineComponent,
  computed,
  ref,
  onMounted,
  provide,
  onUnmounted,
  toRefs
} from 'vue'
import dayjs from 'dayjs'
import { datepickerProps } from './types'
import {
  getCurrentYear,
  getCurrentDate,
  getCurrentMonth,
  getPrevDaysList,
  getCurrentDaysList,
  getNextDaysList,
  genTenYearsList
} from './dateutils'
import dpHeader from './layout/header'
import dpContent from './layout/content'
import dpFooter from './layout/footer'
import dpRight from './layout/right'
const NAME = 'h-datepicker'

export default defineComponent({
  name: NAME,
  props: datepickerProps,
  components: {
    dpHeader,
    dpContent,
    dpFooter,
    dpRight
  },
  setup(props, ctx) {
    /***
     * 所有date数据应该由主组件保管，方便全局的数据一致
     */
    const currentYear = ref(getCurrentYear())
    const currentMonth = ref(getCurrentMonth())
    const currentDate = ref(getCurrentDate())
    const prevDaysList = computed(() => {
      return getPrevDaysList(currentYear.value, currentMonth.value + 1)
    })
    const curDaysList = computed(() => {
      return getCurrentDaysList(currentYear.value, currentMonth.value + 1)
    })
    const nextDaysList = computed(() => {
      return getNextDaysList(currentYear.value, currentMonth.value + 1)
    })
    const tenYearsList = computed(() => {
      return genTenYearsList(currentYear.value)
    })
    const contentData = () => {
      if (curMode.value === 'date' || curMode.value === 'datetime') {
        return [prevDaysList, curDaysList, nextDaysList]
      }
      if (curMode.value === 'year') {
        return [tenYearsList]
      }
    }
    const contentTitle = ['一', '二', '三', '四', '五', '六', '日']
    /**
     * 到下一个文档注释为止，与下拉框是否显示和一些基础样式相关，已完成。之后可以*抽离出来复用
     */
    onMounted(() => {
      document.addEventListener('click', closeMenu)
    })
    const wrapper = ref()
    const closeMenu = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (
        !(
          wrapper.value.contains(el) ||
          el.classList.contains('h-dp__header-btn')
        )
      ) {
        if (mainIsActive.value) {
          mainIsActive.value = false
          placeholderValue.value = ''
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
      placeholderValue.value = ''
    }
    // main的类
    const mainClasses = computed(() => [
      `${NAME}__main`,
      mainIsActive.value ? `${NAME}__main--active` : '',
      props.mode === 'datetime' ? `${NAME}__main--datetime` : ''
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
    const dpEmit = (e: string | number) => {
      if (mode.value === curMode.value) {
        mainIsActive.value = false
        placeholderValue.value = ''
      }
      if (mode.value === 'date') {
        if (curMode.value === 'date') {
          pickedDate.value = dayjs(e).format(props.format)
          currentDate.value = dayjs(e).date()
          currentMonth.value = dayjs(e).month()
          currentYear.value = dayjs(e).year()
        }
        if (curMode.value === 'year') {
          currentDate.value = dayjs(e).date()
          pickedDate.value = dayjs(e).year() + '-'
        }
      }
      if (mode.value === 'year') {
        pickedDate.value = e as string
      }
      if (mode.value === 'month') {
        pickedDate.value = '' + currentYear.value + '-' + e
      }
    }
    /***
     * 渲染的类型,初始化为props的mode类型
     * 子组件的操作只会变更curMode
     * 当curMode和mode不一致时,说明组件内有页面跳转
     */
    const { mode } = toRefs(props)
    const curMode = ref(mode.value)
    /***
     * 向下透传的东西有
     * 1.当前的日期数据 currentDate,Year,Month
     * 2.改变日期数据的接口 dpEmit
     * 3.当前的mode和真正的mode 由于一些组件涉及页面切换，需要通过mode记录初始页面，curMode记录当前流动的页面。防止最后找不到初始页
     * 4.真正选择的日期pickedDate,子代需要靠他判断哪一天被激活
     */
    provide('DP_CTX', {
      currentDate,
      currentYear,
      currentMonth,
      dpEmit,
      curMode,
      format: props.format,
      pickedDate
    })
    /***
     * 操作改变date和mode
     */
    const toPrevMonth = () => {
      console.log(prevDaysList.value)
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
      switch (curMode.value) {
        case 'date':
        case 'month':
        case 'datetime':
          toPrevYear()
      }
    }
    const doubleNext = () => {
      switch (curMode.value) {
        case 'date':
        case 'month':
        case 'datetime':
          toNextYear()
      }
    }
    const toYearMode = () => {
      curMode.value = 'year'
    }
    const placeholderValue = ref('')
    const setPlaceholderValue = (args: string) => {
      placeholderValue.value = args
    }
    const input = ref()
    const inputValue = ref('')
    // const handleInput = (e: Event) => {
    //   if (e.data) {
    //     inputValue.value += e.data
    //   }
    // }
    // 格式对了留下来，不对直接清空
    const dateValid = () => {
      // console.log(inputValue)
      if (dayjs(inputValue.value).isValid()) {
        console.log(inputValue.value)
        pickedDate.value = dayjs().format(inputValue.value)
      } else {
        console.log(inputValue.value)
        inputValue.value = ''
      }
      // console.log(pickedDate.value)
    }
    return () => (
      <div ref={wrapper} class={classes.value}>
        <input
          ref={input}
          // onInput={handleInput}
          onBlur={dateValid}
          placeholder={placeholderValue.value}
          value={pickedDate.value}
          onClick={handleInputClick}
          class={`${NAME}__input`}
          type="text"
        />
        <div class={mainClasses.value}>
          <div class="h-dp__center">
            <dpHeader
              onSinglePrev={singlePrev}
              onSingleNext={singleNext}
              onDoublePrev={doublePrev}
              onDoubleNext={doubleNext}
              onSecondhandYear={toYearMode}
              yearRangeStart={tenYearsList.value[0]}
              yearRangeEnd={tenYearsList.value[0] + 11}
            ></dpHeader>
            <dpContent
              onHoverEmit={(args: string) => setPlaceholderValue(args)}
              title={contentTitle}
              data={contentData()}
            ></dpContent>
            {curMode.value === 'date' ? <dpFooter></dpFooter> : ''}
          </div>
          {props.mode === 'datetime' ? <dpRight></dpRight> : ''}
        </div>
      </div>
    )
  }
})
