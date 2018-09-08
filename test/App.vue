<template>
  <div class="view-sign">
    <h2>签名页</h2>
    <div class="row">
      <label>风险提示语抄录</label>
      <RSignPipeline :commit="commit" @sign="sign" :theme="{}"/>
    </div>
    <div>
      <img v-if="dataURL" :src="dataURL"/>
    </div>
  </div>
</template>
<script>
  import RSignPipeline from '../src/r-sign-pipeline'
  export default {
    name: 'view-sign',
    components: {
      RSignPipeline
    },
    data () {
      return {
        commit: '本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。',
        dataURL: null
      }
    },
    methods: {
      sign (dataURL) {
        this.dataURL = dataURL
      }
    }
  }
</script>
<style lang="scss">
  .view-sign {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #f7f7f7;

    h2 {
      font-size: 16px;
      font-weight: normal;
      line-height: 40px;
      margin: 0;
      background-color: white;
      padding: 0 12px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      background-color: white;
      margin: 8px 0;
      padding: 0 5px 0 12px;
    }

    img {
      max-width: 100%;
      display: block;
    }
  }
</style>
