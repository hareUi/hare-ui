<template>
  <h-card  class="my-card">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.db2nANl3ppPFEzhJi_m_7AAAAA?pid=ImgDet&rs=1" alt="">
      <div class="bottom">
          <span>一个带图片的卡片</span>
          <h-button class="click"  type="primary">操作按钮</h-button>
      </div>
      

  </h-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.my-card{
  width: 400px;
  
  img{
      padding: 0px;
  }
  .bottom{
      margin-top: 5px;
      border-top: 1px solid #d9d8d8;
      height: 40px;
      line-height: 40px;
    span{
        color: #ada9a9;
    }
    .click{
        float: right;
    }

    
  }
  
}
</style>
