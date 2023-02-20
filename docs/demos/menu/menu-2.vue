<template>
  <div>
    <h-menu
      style="height: 100vh"
      mode="vertical"
      :logo="logo"
      :defaultIndex="'a'"
    >
      <h-menu-item index="a" icon="vue">Dashboard</h-menu-item>
      <h-menu-item index="b" icon="user">用户管理</h-menu-item>
      <!-- <h-menu-item index="c"></h-menu-item> -->
      <h-submenu index="c" icon="lock" title="权限管理">
        <h-menu-item index="c-1" icon="vue">Dashboard</h-menu-item>
        <h-menu-item index="c-2" icon="user">用户管理</h-menu-item>
        <h-menu-item index="c-3">权限管理</h-menu-item>
      </h-submenu>
    </h-menu>
  </div>
</template>

<script lang="ts" setup>
const logo = {
  imgSrc: 'https://cn.vuejs.org/logo.svg',
  text: 'Hare Admin'
}
</script>

<style scoped lang="scss">
.vp-doc li + li {
  margin-top: 0;
}
.vp-doc li > ol,
.vp-doc li > ul {
  margin: 0;
}
</style>
