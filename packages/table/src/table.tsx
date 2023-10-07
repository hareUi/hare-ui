import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { tableProps } from './types'
import tbRowHeader from './common/table-header'
import tbRow from './common/table-row'

const NAME = 'h-table'

export default defineComponent({
  name: NAME,
  props: tableProps,
  components: { tbRowHeader, tbRow },
  setup(props) {
    const headerTitles = computed(() => props.columns.map(item => item.title))
    const tableColumnKeys = computed(() =>
      props.columns.map(item => item.dataIndex)
    )
    const tableData = computed(() => props.data)

    // 虚拟滚动参数
    const itemHeight = 100
    const start = ref(0)
    const volume = ref(0)
    const cHeight = ref(0)
    const tableRef = ref(null)

    // 实际渲染列表
    const renderData = computed(() =>
      // 这里在可视化区域上下各多预留了一个可见元素
      tableData.value.slice(
        Math.max(start.value - 1, 0),
        Math.min(start.value + volume.value + 1, tableData.value.length)
      )
    )

    const scrollHandle = () => {
      // scrollTop 表示表格当前滚动高度
      const { scrollTop } = tableRef.value
      start.value = Math.floor(scrollTop / itemHeight)
    }

    onMounted(() => {
      cHeight.value = document.querySelector('.h-table').clientHeight
      volume.value = Math.ceil(cHeight.value / itemHeight)
      tableRef.value.addEventListener('scroll', scrollHandle)
    })

    onUnmounted(() => {
      tableRef.value.removeEventListener('scroll', scrollHandle)
    })

    return () => (
      <div class={NAME} ref={tableRef}>
        <tbRowHeader title={headerTitles.value}></tbRowHeader>
        {/* 上部分滚动留空区域 */}
        <div
          style={{
            height: `${Math.max(start.value - 1, 0) * itemHeight}px`
          }}
        ></div>
        <div>
          {renderData.value.map((item, i) => {
            return (
              <tbRow
                data={tableColumnKeys.value.map(key => item[key])}
                itemHeight={itemHeight}
                key={item.key || `table-row-${i}`}
              ></tbRow>
            )
          })}
        </div>
        {/* 下部分滚动留空区域 */}
        <div
          style={{
            height: `${
              Math.max(
                tableData.value.length - start.value - volume.value - 1,
                0
              ) * itemHeight
            }px`
          }}
        ></div>
      </div>
    )
  }
})
