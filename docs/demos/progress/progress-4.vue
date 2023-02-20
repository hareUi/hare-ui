<template>
  <section class="h-code-box-demo">
    <div class="progress-container-circle">
      <h-progress :isCircle="true" :percentage="80" barBgColor="#e056fd" :showContent="false"> </h-progress>
    </div>
    <div class="progress-container-circle">
      <h-progress :isCircle="true" :percentage="80" barBgColor="#22a6b3" percentage-text-color="#22a6b3"> </h-progress>
    </div>
    <div class="progress-container">
      <h-progress :percentage="80" barBgColor="#badc58" percentage-text-color="#eb4d4b" percentageText="80%"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress :percentage="80" barBgColor="orange" percentage-text-placement="outside" percentage-text-color="orange" percentageText="80%"></h-progress>
    </div>
  </section>
</template>
<style>
.progress-container-circle {
  height: 130px;
  width: 130px;
  font-size: 20px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
}
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
