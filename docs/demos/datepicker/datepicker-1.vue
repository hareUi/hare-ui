<template>
  <div class="container">
    日期选择器
    <h-datepicker></h-datepicker>
    年份选择器
    <h-datepicker mode="year"></h-datepicker>
    月份选择器
    <h-datepicker mode="month"></h-datepicker>
    周选择器
    <h-datepicker mode="week"></h-datepicker>
    datetime
    <h-datepicker mode="datetime"></h-datepicker>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
  height: 300px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
