<template>
  <section class="h-code-box-demo">
    <div class="progress-container">
      <h-progress :percentage="80" percentageText="80%"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress :percentage="30" percentageText="30%" barBgColor="#50D4AB" height="30px"></h-progress>
    </div>
  </section>
</template>
<style>
.progress-container {
  margin-bottom: 20px;
}
.h-code-box-demo {
  border-bottom: 1px dashed #dfe1e6;
  padding: 16px 0;
}
.progress-container {
  margin-bottom: 20px;
}


</style>
