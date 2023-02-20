import { defineComponent } from 'vue'

const props = {
  title: Array<Object> || undefined
}
export default defineComponent({
  name: 'tb-header',
  props,
  setup(props, { emit }) {
    return () => {
      return (
        <div class="h-table__row__header">
          <table>
            <thead>
              <tr>
                {props.title.map((item, index) => {
                  return (
                    <th class="h-table__row__header__item" key={item}>
                      {item}
                    </th>
                  )
                })}
              </tr>
            </thead>
          </table>
        </div>
      )
    }
  }
})
