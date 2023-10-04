<template>
  <h-table :data="tableData" :columns="columns"></h-table>
  <div style="margin-top: 20px">
    <h-button
      @click="switchNormalData"
      type="primary"
      style="margin-right: 10px"
      >普通数据</h-button
    >
    <h-button @click="switchBigData" type="primary">大量数据</h-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 这里使用了 mock 生成的数据
import {
  normalTableData,
  bigTableData
} from '../../../packages/utils/src/mock-data'

const tableData = ref(normalTableData.list)
const columns = ref([
  { title: 'Date', dataIndex: 'date' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Address', dataIndex: 'address' },
  { title: 'Phone', dataIndex: 'phone' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Ip', dataIndex: 'ip' }
])

const switchNormalData = () => {
  tableData.value = normalTableData.list
}

const switchBigData = () => {
  tableData.value = bigTableData.list
}
</script>
