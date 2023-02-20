import { defineComponent, reactive } from 'vue'
import { tableProps } from './types'
import tbRowHeader from './common/table-header'
import tbRow from './common/table-row'

const NAME = 'h-table'

export default defineComponent({
  name: NAME,
  props: tableProps,
  components: { tbRowHeader, tbRow },
  setup(props, { slots }) {
    const data = reactive(props.data)
    const attributes = reactive(Object.keys(data[0]))
    const content = reactive(data)

    return () => (
      <div class={NAME}>
        <tbRowHeader title={attributes}></tbRowHeader>
        {Object.values(content).map(item => {
          return <tbRow data={item}></tbRow>
        })}
      </div>
    )
  }
})
