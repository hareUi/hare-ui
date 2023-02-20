<template>
  <div class="avatar-demo-2">
    <h-avatar name="Avatar" :width="28" :height="28"></h-avatar>
    <h-avatar customText="HareUI" :width="80" :height="80" :isRound="false"></h-avatar>
    <h-avatar imgSrc="/../../assets/logo.svg" :width="100" :height="100" :isRound="false"></h-avatar>
  </div>
</template>

<style>
.avatar-demo-2 {
  display: flex;
  align-items: center;
}
.avatar-demo-2 .h-avatar {
  margin-right: 10px;
}
</style>
