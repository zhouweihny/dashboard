<template>
  <div class="zui-flex cwrap">
    <h3 class="J_zdevice_tit">设备在线情况</h3>
    <div></div>
    
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'roomrent',
  data() {
    return {
      msg: 'roomrent',
      name: '房间租赁数据',
      legendArr: [],
      color: [],
      myChart: {},
    }
  },
  mounted() {

    
  },
  methods: {
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {
  position: relative;
  .J_zdevice_tit {
    position: absolute;
    top: -20px;
    left: -60px;
    font-size: 30px;
    color: #5CEAFB;
  }
}

.arrow {
  width: 13px;
  height: 17px;
  display: inline-block;
  margin-left: 3px;

  &.up {
    background: url(../../static/up.png) 0 0 no-repeat;
    background-size: contain;
  }

  &.down {
    background: url(../../static/down.png) 0 0 no-repeat;
    background-size: contain;
  }
}

</style>
