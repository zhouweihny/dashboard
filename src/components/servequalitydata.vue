<template>
  <div class="cwrap">
    <div class="left">
      <div>
        <span class="dot">本月企业服务评分</span>
      </div>
      <div class="ztips">
         <span>上月同期</span>
      </div>
      <div class="lastNum">
        <span class="num">4.5</span>
        <span>4.0 <i class="arrow up"></i></span>
      </div>
    </div>

    <div class="right">
      <div class="servequalitydata">
        <div class="main"></div>  
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'roomrent',
  computed: {
    
  },
  data() {
    return {
      msg: 'servequalitydata',
      name: '企业服务评分结构',
    }
  },
  mounted() {
        
  },
  methods: {
    zinit () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.querySelector('.servequalitydata .main'));
      this.myChart.setOption({
        radar: {
          center: ['50%', '60%'],//图表位置
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#72ACD1',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#214770'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#08112E', '#08112E', '#08112E', '#08112E'],
              shadowColor: '#08112E'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#214770'
            }
          },
          indicator: [{
              name: '效率',
              max: 5
            },
            {
              name: '态度',
              max: 5
            },
            {
              name: '质量',
              max: 5
          }]
        },
        series: [{
          type: 'radar',
          data: [{
            value: [1, 4.5, 2, 3.5, 2.5, 5],
            name: '企业服务评分结构',
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#5CEAFB'
              }
            },
            areaStyle: {
              normal: {
                color: '#317F96'
              }
            }
          }]
        }]
      });
    }
  }
}
</script>

<style scoped lang="scss">
$base_colo: #7bb9dc;
.cwrap{
  display: flex;
  justify-content:space-between;
  .left{
    width: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dot{
      position: relative;
      color: #7bb9dc;
      &:before {
        position: absolute;
        left: -22px;
        top: 4px;
        content: "";
        width: 13px;
        height: 13px;
        border-radius: 13px;
        background: #8FD3FA;
      }
    }
    .ztips {
      margin: 20px auto;
      width: 64%;
      right: -3px;
      top: 12px;
      font-size: 13px;
      color: #8e9096;
      display: flex;
      justify-content:flex-end;
    }
    .num {
      margin-left:30px;
      color: #5BEAFB;
      font-size: 26px;
    }
    .lastNum {
      width: 100%;
      color: #7bb9dc;
      vertical-align: middle;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .J_servequalitydata_tit{

    display: flex;
    justify-content: center;
    margin-top: 9px;
  } 
  .servequalitydata{
    display: flex;
    flex-direction:row-reverse;
    padding-right: 50px;
  }
  .main {
    width: 340px;
    height: 300px;
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
  
}
</style>