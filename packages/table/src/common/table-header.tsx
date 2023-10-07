import { defineComponent } from 'vue'

const props = {
  title: Array
}
export default defineComponent({
  name: 'tb-header',
  props,
  setup(props) {
    return () => (
      <div class="h-table__row__header">
        <table>
          <thead>
            <tr>
              {props.title.map((item, index) => (
                <th
                  class="h-table__row__header__item"
                  key={`table-header-${index}`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    )
  }
})
