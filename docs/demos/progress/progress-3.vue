<template>
  <section class="h-code-box-demo">
    <div class="progress-container-circle">
      <h-progress :isCircle="true" :percentage="80" :showContent="false"> </h-progress>
    </div>
    <div class="progress-container-circle">
      <h-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB" :strokeWidth="8"> </h-progress>
    </div>
    <div class="progress-container-circle">
      <h-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB">
        <span class="icon-position">
          <h-icon name="right" color="#3dcca6" />
        </span>
      </h-progress>
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
}
.icon-position {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
  color: #50d4ab;
  font-size: 24px;
}
</style>
