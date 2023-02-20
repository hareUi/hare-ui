import { defineComponent, reactive } from 'vue'

const props = {
  data: Array<Object> || undefined
}
export default defineComponent({
  name: 'tb-row',
  props,
  setup(props, { emit }) {
    const rowItems = reactive(Object.values(props.data))
    return () => {
      return (
        <div class="h-table__row">
          <table>
            <tbody>
              <tr>
                {rowItems.map((item, index) => {
                  return (
                    <td class="h-table__row__item" key={item}>
                      {item}
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
})
