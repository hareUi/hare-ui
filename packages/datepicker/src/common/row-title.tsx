import { defineComponent } from 'vue'
const props = {
  title: Array<string> || undefined
}
export default defineComponent({
  name: 'dp-row-title',
  props,
  setup(props, { emit }) {
    return () => {
      return (
        <div class="hare-datepicker__row__title">
          {props.title.map((item, index) => {
            return (
              <span class="hare-datepicker__row__title__item" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      )
    }
  }
})
