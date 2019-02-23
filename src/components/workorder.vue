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

export default {
  name: 'workorder',
  data() {
    return {
      msg: 'workorder',
      name: '折线图',
      legendArr: [],
      color: [],
      myChart: {},
    }
  },
  mounted() {
    var dottedBase = +new Date();
    var lineData = [];
    var lineData2 = [];
    var barData = [];
    for (var i = 0; i < 12; i++) {
      var b = parseInt(Math.random() * 200, 10);
      var d = parseInt(Math.random() * 200, 10);
      var e = parseInt(Math.random() * 200, 10);
      barData.push(b)
      lineData.push(d + b);
      lineData2.push(d + b + e);
    }

    console.log(JSON.stringify(barData))
    console.log(JSON.stringify(lineData))
    console.log(JSON.stringify(lineData2))

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
        },
        formatter (params, ticket, callback) {
          var _qd = '',
            _xz = '',
            _tz = '',
            str = params[0].axisValueLabel+"房间订单信息"+"<br>";
          params.forEach(v=>{
            if(v.seriesName == '维修')
              _qd = v.data;
            if(v.seriesName == '保洁')
              _xz = v.data;
            if(v.seriesName == '其他')
              _tz = v.data;
          })

          if(_qd)
            str += "维修："+_qd+"<br>";
          if(_xz)
            str += "保洁："+_xz+"<br>";
          if(_tz)
            str += "其他："+_tz+"<br>";

          return str;
        }
      },
      legend: {
        data: ['维修', '保洁', '其他'],
        textStyle: {
          color: '#7bb9dc'
        },
        left: 100,
        top: 20,
        itemGap: 30,
        itemWidth: 50
      },
      xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisLine: {
          lineStyle: {
            color: '#7bb9dc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#7bb9dc'
          }
        }
      },
      series: [{
        name: '保洁',
        type: 'line',
        smooth: false,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        data: lineData,
        itemStyle: {
          normal: {
            color: "#FFB508",
            lineStyle: {
              color: "#FFB508"
            }
          }
        },
        lineStyle: {
          color: '#FFB508'
        }
      }, {
        name: '其他',
        type: 'line',
        smooth: false,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        data: lineData2,
        itemStyle: {
          normal: {
            color: "#FF4C4B",
            lineStyle: {
              color: "#FF4C4B"
            }
          }
        },
        lineStyle: {
          color: '#FF4C4B'
        }
      }, {
        name: '维修',
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
        data: lineData2
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
        data: lineData2
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
