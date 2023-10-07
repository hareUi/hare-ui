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
// 这里使用了 mock 随机生成大量数据
import { bigTableData } from '@packages/utils/src/mock-data'

const columns = ref([
  { title: 'Date', dataIndex: 'date' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Address', dataIndex: 'address' },
  { title: 'Phone', dataIndex: 'phone' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Ip', dataIndex: 'ip' }
])

const normalTableData = [
  {
    date: '1979-07-20',
    name: 'Jeffrey',
    address: '天津市',
    phone: '13447585382',
    email: 'v.swr@ewaqdlwjp.mm',
    ip: '155.33.189.27',
    key: 1
  },
  {
    date: '1982-01-29',
    name: 'Edward',
    address: '宁德市',
    phone: '13871406583',
    email: 'e.ozmreb@myrtrasiai.mx',
    ip: '58.90.86.169',
    key: 2
  },
  {
    date: '1981-10-28',
    name: 'Jason',
    address: '广州市',
    phone: '13131268648',
    email: 'b.gftuw@slysxo.kr',
    ip: '132.185.87.118',
    key: 3
  },
  {
    date: '1994-09-14',
    name: 'Barbara',
    address: '自贡市',
    phone: '18245442068',
    email: 's.ftqvurnyln@pvihob.cg',
    ip: '25.54.191.65',
    key: 4
  },
  {
    date: '1988-05-03',
    name: 'Shirley',
    address: '扬州市',
    phone: '18429954317',
    email: 'i.tvubofjsh@cleyeq.as',
    ip: '81.208.248.129',
    key: 5
  },
  {
    date: '1972-10-17',
    name: 'Melissa',
    address: '湖州市',
    phone: '13284053660',
    email: 'g.gumb@vlh.de',
    ip: '85.123.242.100',
    key: 6
  },
  {
    date: '1988-06-23',
    name: 'Thomas',
    address: '台北市',
    phone: '13156670182',
    email: 'u.kxrbmws@itgjok.cx',
    ip: '112.230.40.149',
    key: 7
  },
  {
    date: '1972-05-22',
    name: 'William',
    address: '来宾市',
    phone: '18632932589',
    email: 'j.gejcr@qjnzk.km',
    ip: '81.15.191.176',
    key: 8
  }
]

const tableData = ref(normalTableData)

const switchNormalData = () => {
  tableData.value = normalTableData
}

const switchBigData = () => {
  tableData.value = bigTableData.list
}
</script>
