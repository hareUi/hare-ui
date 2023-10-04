import { defineComponent, computed, CSSProperties } from 'vue'

const props = {
  data: Array<Object>,
  itemHeight: {
    type: Number,
    default: 100
  }
}
export default defineComponent({
  name: 'tb-row',
  props,
  setup(props) {
    const rowItems = computed(() => props.data)
    const itemHeight = computed(() => props.itemHeight)

    const trStyle = computed<CSSProperties>(() => {
      return {
        height: `${itemHeight.value}px`,
        lineHeight: `${itemHeight.value}px`
      }
    })

    return () => {
      return (
        <div class="h-table__row">
          <table>
            <tbody>
              <tr style={trStyle.value}>
                {rowItems.value.map((item, index) => {
                  return (
                    <td class="h-table__row__item" key={`item${index}`}>
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
