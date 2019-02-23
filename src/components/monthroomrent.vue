<template>
  <div class="zui-flex cwrap">
    <div class="monthroomrent">
      <div class="main"></div>
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
      msg: 'monthroomrent',
      name: '月房间签单/续租/退租（近年）',
      legendArr: [],
      color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
      myChart: {},
    }
  },
  mounted() {
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

    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.monthroomrent .main'));
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
        data: ['办公室收入', '移动工位收入', '固定工位收入'],
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
        name: '办公室收入',
        type: "bar",
        stack: "总量",
        barMaxWidth: 20,
        barWidth: 15,
        barGap: "10%",
        data: lineData,
        itemStyle: {
          normal: {
            color: "#00AFAA",
            lineStyle: {
              color: "#00AFAA"
            }
          }
        }
      }, {
        name: '移动工位收入',
        type: "bar",
        stack: "总量",
        barMaxWidth: 20,
        barWidth: 15,
        barGap: "10%",
        data: lineData2,
        itemStyle: {
          normal: {
            color: "#FFB508",
            lineStyle: {
              color: "#FFB508"
            }
          }
        }
      }, {
        name: '固定工位收入',
        type: "bar",
        stack: "总量",
        barMaxWidth: 20,
        barWidth: 15,
        barGap: "10%",
        itemStyle: {
          normal: {
            color: "#FF4C4D",
            lineStyle: {
              color: "#FF4C4D"
            }
          }
        },
        data: barData
      }]
    });    
  },
  methods: {
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {
  .monthroomrent {
    .main {
      width: 806px;
      height: 330px;
    }
  }
}

</style>
