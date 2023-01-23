<template>
  <div>
    <h-input
      placeholder="small input"
      size="small"
      prefix-icon="user"
    ></h-input>
    <h-input placeholder="middle input" prefix-icon="user"></h-input>
    <h-input placeholder="large input" size="large">
      <template #prefix>
        <h-icon size="large" name="user"></h-icon>
      </template>
    </h-input>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
div {
  margin-top: 15px;
}
</style>
