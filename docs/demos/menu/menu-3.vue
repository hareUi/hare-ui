<template>
  <h-menu :defaultIndex="'a'" mode="vertical" style="width: 100px">
    <h-submenu index="a" title="a">
      <h-menu-item index="a-a">a-a</h-menu-item>
      <h-menu-item index="a-b">a-b</h-menu-item>
      <h-menu-item index="a-c">a-c</h-menu-item>
    </h-submenu>
    <h-menu-item index="b">b</h-menu-item>
    <h-menu-item index="c">c</h-menu-item>
  </h-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.vp-doc ul,
.vp-doc ol {
  padding-left: 0;
  margin: 0;
}
</style>
