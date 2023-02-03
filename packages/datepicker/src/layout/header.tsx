import { defineComponent, inject, PropType } from 'vue'
import { dpContext } from '../types'
const props = {
  // mode.value为month和date时使用
  currentYear: Number,
  currentMonth: Number,
  // mode.value为year时使用
  yearRangeStart: Number,
  yearRangeEnd: Number
}
export default defineComponent({
  name: 'dp-layout-header',
  emits: [
    'singlePrev',
    'doublePrev',
    'singleNext',
    'doubleNext',
    'secondhandYear'
  ],
  props,
  setup(props, { emit }) {
    const { curMode: mode } = inject('DP_CTX') as dpContext
    // 不同mode.value下不同按键的切换方式不同，抛出给主组件处理
    const singlePrev = () => {
      emit('singlePrev')
    }
    const doublePrev = () => {
      emit('doublePrev')
    }
    const singleNext = () => {
      emit('singleNext')
    }
    const doubleNext = () => {
      emit('doubleNext')
    }
    const toYearMode = () => {
      emit('secondhandYear')
    }
    const titleType = () => {
      if (mode.value === 'date') {
        return (
          <div>
            <span onClick={toYearMode} class="h-dp__header-btn">
              {props.currentYear}年{' '}
            </span>
            <span class="h-dp__header-btn">{props.currentMonth}月</span>
          </div>
        )
      } else if (mode.value === 'month') {
        return (
          <div class="h-dp__header-btn">
            <span>{props.currentYear}</span>
          </div>
        )
      } else {
        return (
          <div>
            <span class="h-dp__header-btn">{props.yearRangeStart}</span>
            <span class="h-dp__header-btn">{props.yearRangeEnd}</span>
          </div>
        )
      }
    }
    return () => {
      return (
        <div class="h-dp__header">
          <div class="h-dp__header-btn" onClick={doublePrev}>
            &lt;&lt;
          </div>
          {mode.value === 'date' && (
            <div class="h-dp__header-btn" onClick={singlePrev}>
              &lt;
            </div>
          )}
          {titleType()}
          {mode.value === 'date' && (
            <div class="h-dp__header-btn" onClick={singleNext}>
              &gt;
            </div>
          )}
          <div class="h-dp__header-btn" onClick={doubleNext}>
            &gt;&gt;
          </div>
        </div>
      )
    }
  }
})
