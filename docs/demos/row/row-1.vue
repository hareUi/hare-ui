<template>
  <h-row :gutter="[20, 30]">
    <h-col>col</h-col>
  </h-row>
  <h-row :gutter="[20, 30]">
    <h-col :span="12">col-12</h-col>
    <h-col :span="12">col-12</h-col>
  </h-row>
  <h-row :gutter="[20, 30]">
    <h-col :span="8">col-8</h-col>
    <h-col :span="8">col-8</h-col>
    <h-col :span="8">col-8</h-col>
  </h-row>
  <h-row :gutter="[20, 30]">
    <h-col :span="6">col-6</h-col>
    <h-col :span="6">col-6</h-col>
    <h-col :span="6">col-6</h-col>
    <h-col :span="6">col-6</h-col>
  </h-row>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.h-row {
  width: 100%;
  height: 100px;
  padding: 12px;
  color: #fff;
  .h-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :nth-child(odd) {
    background-color: #1677ffbf;
  }
  & > :nth-child(even) {
    background-color: #1677ff;
  }
}
</style>
