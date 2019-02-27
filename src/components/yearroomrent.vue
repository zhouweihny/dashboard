<template>
  <div class="zui-flex cwrap">
    <div class="yearroomrent">
      <div class="main"></div>
    </div>
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
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'yearroomrent',
      name: '月房间签单/续租/退租（近年）',
      legendArr: [],
      color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
      myChart: {},
      yearroomrent: {
        qiandan:[ ],
        xiuzhu: [ ],
        tuizhu: [ ],
        yuefen: []
      }
    }
  },
  mounted() {
       
  },
  methods: {
    zinit () {
      /*var dottedBase = +new Date();
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
      }*/

      if(this.storeAjaxData && this.storeAjaxData.yearroomrent){
        this.yearroomrent = this.storeAjaxData.yearroomrent;

        var lineData = this.yearroomrent.xiuzhu;
        var lineData2 = this.yearroomrent.tuizhu;
        var barData = this.yearroomrent.qiandan;
        var yuefen = this.yearroomrent.yuefen;

        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.querySelector('.yearroomrent .main'));
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
                if(v.seriesName == '签单')
                  _qd = v.data;
                if(v.seriesName == '续租')
                  _xz = v.data;
                if(v.seriesName == '退租')
                  _tz = v.data;
              })

              if(_qd)
                str += "签单："+_qd+"<br>";
              if(_xz)
                str += "续租："+_xz+"<br>";
              if(_tz)
                str += "退租："+_tz+"<br>";

              return str;
            }
          },
          legend: {
            data: ['签单', '续租', '退租'],
            textStyle: {
              color: '#7bb9dc'
            },
            left: 40,
            top: 25,
            itemGap: 30,
            itemWidth: 30
          },
          xAxis: {
            data: yuefen,
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
            name: '续租',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
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
            name: '退租',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
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
            name: '签单',
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
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {
  .yearroomrent {
    .main {
      width: 23.5rem;
      height: 11.8rem;
    }
  }
}

</style>
