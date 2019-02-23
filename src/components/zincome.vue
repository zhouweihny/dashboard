<template>
  <div class="zui-flex cwrap">
    <h3 class="J_zdevice_tit">营收数据</h3>
    <div class="zui-flex zmain">
      <div class="zleft">
        <div class="zui-flex ztotal">
          <div>本月总收入</div>
          <div class="zui-flex zitems">
            <div v-for="(item, index) in total" :key="index">
              <div v-if="item == ','">
                <div class="split">,</div>
              </div>
              <div v-else>
                <div class="zitem">{{item}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="yearIncome">
          <h4>园区月收支情况（近12个月）</h4>
          <div class="main"></div>
        </div>
      </div>

      <div class="zright">
        
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'zincome',
  data() {
    return {
      msg: 'zincome',
      name: '营收数据',
      legendArr: [],
      color: [],
      myChart: {},
      total: 450000
    }
  },
  mounted() {
    
    this.total = this.formatNum(parseInt(this.total, 10));
    this.total = this.total.split('')
    console.log(this.total)
    console.log(typeof this.total)

    /*this.initCharts('energyDay');
    setTimeout(()=>{
      this.initCharts('energyYear');
    }, 500)*/
    
  },
  methods: {
    formatNum (num) {
      return (num+ '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    },
    initCharts (type) {
      var dayData =[];

      if(type == 'energyDay'){
        for(var i=0; i<32; i++){
          dayData.push(i);
        }
      }else{
        for(var i=1; i<13; i++){
          dayData.push(i);
        }
      }

      var lineData = [];
      if(type == 'energyDay'){
        for (var i = 0; i < 31; i++) {
          var b = parseInt(Math.random() * 200, 10);
          var d = parseInt(Math.random() * 200, 10);
          lineData.push(d + b);
        }
      }else{
        for (var i = 0; i < 12; i++) {
          var b = parseInt(Math.random() * 200, 10);
          var d = parseInt(Math.random() * 200, 10);
          var e = parseInt(Math.random() * 1000, 10);
          lineData.push(d + b + e);
        }
      }

      var lineData2 = [];
      if(type == 'energyDay'){
        for (var i = 0; i < 31; i++) {
          var b = parseInt(Math.random() * 20, 10);
          lineData2.push(b);
        }
      }else{
        for (var i = 0; i < 12; i++) {
          var b = parseInt(Math.random() * 20, 10);
          lineData2.push(b);
        }
      }

      // 基于准备好的dom，初始化echarts实例
      var myChart = null;
      myChart = echarts.init(document.querySelector('.'+type+' .main'));
      myChart.setOption({
        title:{
          textStyle:{
            color:"#6a9cd5",
          },
          text:'',
          left:"center",
        },
        tooltip: {//鼠标悬浮弹出提示框
          trigger:'axis', //提示框弹出的触发时间，折线图和柱状图为axis
          formatter (params, ticket, callback) {
            var _qd = '',
              _xz = '',
              str = params[0].axisValueLabel+"号能源消耗"+"<br>";
            params.forEach(v=>{
              if(v.seriesName == '电')
                _qd = v.data;
              if(v.seriesName == '水')
                _xz = v.data;
            })

            if(_qd)
              str += "电量消耗："+_qd+"度<br>";
            if(_xz)
              str += "水量消耗："+_xz+"吨";

            return str;
          }
        },
        legend: {
          data: ['电', '水'],
          textStyle: {
            color: '#7bb9dc'
          },
          left: 70,
          top: 20,
          itemGap: 30,
          itemWidth: 50
        },
        xAxis: [{//x轴
          type: 'category',//数据类型为不连续数据
          boundaryGap: false,//坐标轴两边是否留白
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#34607B' //x轴颜色
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#6a9cd5',
            },
          },
          axisTick: { show: true,},//刻度点数轴
          data: dayData 
        }],
        yAxis: [{//y轴的相关设置
          type: 'value',//y轴数据类型为连续的数据
          min: 0,//y轴上的刻度最小值
          // max: Math.max.apply(null, lineData),//y轴上的刻度最大值
          splitNumber: 5,//y轴上的刻度段数
          splitLine: {//y轴上的y轴线条相关设置
            show: true,
            lineStyle: {
              color: '#233e64'
            }
          },
          axisLine: {//y轴的相关设置
            show: true,
            lineStyle: {
              color: '#34607B' //y轴颜色
            },
          },
          axisLabel: {//y轴的标签相关设置
            textStyle: {
              color: '#5CEBFC',
            },
          }
        }, {//y轴的相关设置
          type: 'value',//y轴数据类型为连续的数据
          min: 0,//y轴上的刻度最小值
          splitNumber: 5,//y轴上的刻度段数
          splitLine: {//y轴上的y轴线条相关设置
            show: false,
          },
          axisLine: {//y轴的相关设置
            show: true,
            lineStyle: {
              color: '#34607B' //y轴颜色
            },
          },
          axisLabel: {//y轴的标签相关设置
            textStyle: {
              color: '#5CEBFC',
            },
          }
        }],
        series: [{
          name: '电',
          type: 'line',//统计图类型为折线图
          smooth: true, //是否平滑曲线显示
          symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
          yAxisIndex : 0,
          itemStyle: {
            normal: {
              color: "#3deaff",
              lineStyle: {
                color: "#3deaff"
              }
            }
          },
          lineStyle: {//线条的相关设置
            normal: {
              color: "#3deaff",   // 线条颜色
              width: 3
            }
          },
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0,  color: 'rgba(61,234,255, 0.9)'}, { offset: 0.7,  color: 'rgba(61,234,255, 0)'}], false),
              shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: lineData
        }, {
          name: '水',
          type: 'line',
          smooth: true,
          showAllSymbol: false,
          yAxisIndex : 1,
          symbolSize: 0,
          data: lineData2,
          itemStyle: {
            normal: {
              color: "#FE2D54",
              lineStyle: {
                color: "#FE2D54"
              }
            }
          },
          lineStyle: {
            normal: {
              color: "#FE2D54",   // 线条颜色
              width: 3
            }
          }
        }]
      });  
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {
  position: relative;
  width: 1482px;
  height: 640px;
  .J_zdevice_tit {
    position: absolute;
    top: 10px;
    left: 43px;
    font-size: 30px;
    color: #5CEAFB;
  }
  
  .zmain {
    position: absolute;
    top: 70px;
    left: 10px;
    width: 1470px;
    height: 560px;
    border: 1px solid #fff;

    .zleft {
      position: relative;
      .ztotal {
        position: absolute;
        top: 43px;
        left: 60px;
        width: 600px;
        height: 80px;
        font-size: 30px;
        color: #5BEAFB;
        justify-content: center;
        align-items: center;
        & > div:first-child {
          margin-right: 30px;
        }
        .zitems {
          align-items: flex-end;
          .zitem {
            padding: 0 8px;
            height: 66px;
            line-height: 66px;
            text-align: center;
            background: #0A3263;
            margin: 0 4px;
            font-size: 46px;
            font-weight: bold;
          }
          .split {
            font-size: 40px;
            font-weight: bold;
          }
        }
      }

      .yearIncome {
        position: absolute;
        top: 403px;
        left: 60px;
        width: 600px;
        height: 80px;
      }
    }
  }
  
}

</style>
