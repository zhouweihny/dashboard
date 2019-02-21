<template>
  <div class="workorder">
    <div class="zui-flex tit">
      <div>
        工单数量 <span>500</span>
      </div>
      <div>
        待处理数量 <span>200</span>
      </div>
    </div>
    <div class="main"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  name: 'roomrent',
  computed: {
    ...mapState(['storecolor'])
  },
  data() {
    return {
      msg: 'roomrent',
      name: '折线图',
      legendArr: [],
      color: [],
      myChart: {},
    }
  },
  mounted() {
    this.zutil.deepClone(this.color, this.storecolor);

    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];
    for (var i = 0; i < 12; i++) {
      var b = Math.random() * 200;
      var d = Math.random() * 200;
      barData.push(b)
      lineData.push(d + b);
    }

    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.workorder .main'));
    this.myChart.setOption({
      title: {
        show: false
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#333'
          }
        }
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' }
              ]
            )
          }
        },
        data: barData
      }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: 'rgba(20,200,212,0.5)' },
                { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                { offset: 1, color: 'rgba(20,200,212,0)' }
              ]
            )
          }
        },
        z: -12,
        data: lineData
      }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          normal: {
            color: '#0f375f'
          }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }]
    });
  },
  methods: {
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.workorder {
  .tit {
    position: absolute;
    top: -80px;
    left: 0;
    justify-content: flex-start;
    & > div {
      position: relative;
      padding-left: 20px;
      font-size: 17px;
      color: #7bb9dc;
      &:nth-child(1) {
        margin-right: 50px;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 9px;
        content: "";
        width: 13px;
        height: 13px;
        border-radius: 13px;
        background: #8FD3FA;
      }

      span {
        color: #5BEAFB;
        font-size: 26px;
        display: inline-block;
        vertical-align: baseline;
        margin-left: 15px;
      }
    }
  }

  .main {
    width: 806px;
    height: 330px;
  }
}

</style>
