import { defineComponent } from 'vue'
import { PropType } from 'vue'
type mode = 'year' | 'month' | 'date'
const titleProps = {
  // mode为month和date时使用
  currentYear: String,
  currentMonth: String,
  // mode为year时使用
  yearRangeStart: String,
  yearRangeEnd: String,
  mode: String as PropType<mode>
}
export default defineComponent({
  name: 'dp-title',
  props: titleProps,
  emits: ['doubleNext', 'singleNext', 'doublePrev', 'singlePrev'],
  setup(props, { emit }) {
    return () => {
      const doublePrev = () => {
        emit('doublePrev')
      }
      const singlePrev = () => {
        emit('singlePrev')
      }
      const doubleNext = () => {
        emit('doubleNext')
      }
      const singleNext = () => {
        emit('singleNext')
      }
      const toYearMode = () => {}
      const titleType = () => {
        if (props.mode === 'date') {
          return (
            <div class="hare-datepicker__title__date">
              <span onClick={toYearMode}>{props.currentYear}</span>
              <span>{props.currentMonth}</span>
            </div>
          )
        } else if (props.mode === 'month') {
          return (
            <div class="hare-datepicker__title__date">
              <span>{props.currentYear}</span>
            </div>
          )
        } else {
          return (
            <div class="hare-datepicker__title__date">
              <span>
                {props.yearRangeStart} - {props.yearRangeEnd}
              </span>
            </div>
          )
        }
      }
      return (
        <div class="hare-datepicker__title">
          <div class="hare-datepicker__title__arrow" onClick={doublePrev}>
            &lt;&lt;
          </div>
          {props.mode === 'date' && (
            <div class="hare-datepicker__title__arrow" onClick={singlePrev}>
              &lt;
            </div>
          )}
          {titleType()}
          {props.mode === 'date' && (
            <div class="hare-datepicker__title__arrow" onClick={singleNext}>
              &gt;
            </div>
          )}
          <div class="hare-datepicker__title__arrow" onClick={doubleNext}>
            &gt;&gt;
          </div>
        </div>
      )
    }
  }
})
