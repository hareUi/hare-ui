<template>
  <div>
    <h-menu :defaultIndex="'a'">
      <h-menu-item index="a">123</h-menu-item>
      <h-menu-item index="b" disabled>123</h-menu-item>
      <h-menu-item index="c">123</h-menu-item>
    </h-menu>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.vp-doc li + li {
  margin-top: 0;
}
</style>
