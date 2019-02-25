<template>
  <div class="zui-flex cwrap">
    <h3 class="J_zdevice_tit">营收数据</h3>
    <div class="zui-flex zmain">
      <div class="zleft">
        <div class="zui-flex ztotal">
          <div>本月总收入</div>
          <div class="zui-flex zitems">
            <div v-for="(item, index) in totalS" :key="index">
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
        <div class="main"></div>
        <div class="zui-flex incomeCount">
          <div class="zui-flex item">
            <div>房间租赁收入</div>
            <div>{{roomIn | formatNum}}</div>
          </div>
          <div class="zui-flex item">
            <div>能耗收入</div>
            <div>{{energyIn | formatNum}}</div>
          </div>
          <div class="zui-flex item">
            <div>停车场收入</div>
            <div>{{parkIn | formatNum}}</div>
          </div>
          <div class="zui-flex item">
            <div>会议室收入</div>
            <div>{{meetroomIn | formatNum}}</div>
          </div>
          <div class="zui-flex item">
            <div>物业服务收入</div>
            <div>{{serveiceIn | formatNum}}</div>
          </div>
        </div>
      </div>
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
  name: 'zincome',
  computed: {
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'zincome',
      name: '营收数据',
      legendArr: [],
      color: [],
      myChart: {},
      total: 0,
      totalS: [],
      roomIn: 0,
      energyIn: 0,
      parkIn: 0,
      meetroomIn: 0,
      serveiceIn: 0,

      "zincome": {
        "total": 0,
        "income": {
          "fangjian":{ "price":'', "rate": '' } ,
          "tingchechang": {"price":'', "rate": '' },
          "wuye": {"price":'', "rate": ''},
          "nenhao": {"price":'', "rate": '' },
          "huiyishi": {"price":'', "rate": '' }
        },
        "data": {
          "shouru": [],
          "zhichu": [],
          "day": []
        }
      },
    }
  },
  mounted() {
    
  },
  methods: {
    zinit () {

      if(this.storeAjaxData && this.storeAjaxData.zincome){
        this.zincome = this.storeAjaxData.zincome;
        this.total = this.zincome.total+ '';
        this.totalS = this.formatNum(parseInt(this.total, 10)).split('');

        this.roomIn = this.zincome.income.fangjian.price;
        this.energyIn = this.zincome.income.nenhao.price;
        this.parkIn = this.zincome.income.tingchechang.price;
        this.meetroomIn = this.zincome.income.huiyishi.price;
        this.serveiceIn = this.zincome.income.wuye.price;
      }
      this.initChart(this.zincome);
      this.initCharts(this.zincome);
    },
    formatNum (num) {
      return (num+ '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    },
    initCharts (obj) {

      var obj = obj
      var data = [
        {
          value: obj.income.fangjian.price,
          name: '房间租赁收入'
        },
        {
          value: obj.income.nenhao.price,
          name: '能耗收入'
        },
        {
          value: obj.income.tingchechang.price,
          name: '停车场收入'
        },
        {
          value: obj.income.huiyishi.price,
          name: '会议室收入'
        },
        {
          value: obj.income.wuye.price,
          name: '物业服务收入'
        }
      ];

        /*totalS =  this.zincome.total;
        roomIn =  this.zincome.income.fangjian;
        energyIn =  this.zincome.income.nenhao;
        parkIn =  this.zincome.income.tingchechang;
        meetroomIn =  this.zincome.income.huiyishi;
        serveiceIn =  this.zincome.income.wuye;


        var data = [
          {
            value: this.zincome.income.fangjian,
            name: '房间租赁收入'
          },
          {
            value: this.zincome.income.nenhao,
            name: '能耗收入'
          },
          {
            value: this.zincome.income.tingchechang,
            name: '停车场收入'
          },
          {
            value: this.zincome.income.huiyishi,
            name: '会议室收入'
          },
          {
            value: this.zincome.income.wuye,
            name: '物业服务收入'
          }
        ];*/


      // 基于准备好的dom，初始化echarts实例
      var myChart2 = null;
      myChart2 = echarts.init(document.querySelector('.zright .main'));
      myChart2.setOption({
        title:{
          textStyle:{
            color:"#7bb9dc",
            fontSize: 30
          },
          text:'收入占比',
          left:"center",
          top:"32%",
        },
        tooltip: {//鼠标悬浮弹出提示框
          trigger:'item'
        },
        series: [{
          type: 'pie',
          radius: ['42%', '55%'],
          center: ['50%', '35%'],
          avoidLabelOverlap: true,
          color: ['#FEB407', '#FF4C4D', '#9702FE', '#00B4D2', '#00BD8D'],
          label: {
            align: 'left',
            normal: {
              formatter(v) {
                return '{a|' + Math.round(v.percent) + '%' + '}';
              },
              rich: {
                a: {
                  color: '#7bb9dc',
                  fontSize: 20
                }
              }
            }
          },
          labelLine: {
            lineStyle: {
              color: '#7bb9dc'
            }
          },
          data: data
          // data: data.sort(function (a, b) { return a.value - b.value; })
        }]
      }); 
    },
    initChart (obj) {
      /*var dayData =[];
      for(var i=1; i<13; i++){
        dayData.push(i);
      }

      var lineData = [];
      for (var i = 0; i < 12; i++) {
        var e = parseInt(Math.random() * 1000, 10);
        lineData.push(e);
      }

      var lineData2 = [];
      for (var i = 0; i < 12; i++) {
        var b = parseInt(Math.random() * 500, 10);
        lineData2.push(b);
      }*/

      var obj = obj;
      var dayData = obj.data.day;
      var lineData = obj.data.shouru;
      var lineData2 = obj.data.zhichu;

      // 基于准备好的dom，初始化echarts实例
      var myChart = null;
      myChart = echarts.init(document.querySelector('.yearIncome .main'));
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
              str = params[0].axisValueLabel+"月收支"+"<br>";
            params.forEach(v=>{
              if(v.seriesName == '收入')
                _qd = v.data;
              if(v.seriesName == '支出')
                _xz = v.data;
            })

            if(_qd)
              str += "收入："+_qd+"元<br>";
            if(_xz)
              str += "支出："+_xz+"元";

            return str;
          }
        },
        legend: {
          data: ['收入', '支出'],
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
        }],
        series: [{
          name: '收入',
          type: 'line',//统计图类型为折线图
          smooth: true, //是否平滑曲线显示
          symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
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
          name: '支出',
          type: 'line',
          smooth: true,
          showAllSymbol: false,
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
    justify-content: space-around;

    .zleft {
      position: relative;
      width: 50%;
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
        top: 199px;
        left: 30px;
        width: 670px;
        height: 310px;
        h4 {
          position: absolute;
          left: 205px;
          top: 0;
          font-size: 21px;
          color: #fff;
        }
        .main {
          position: absolute;
          left: 0px;
          top: 30px;
          width: 700px;
          height: 300px;
        }
      }
    }

    .zright {
      position: relative;
      width: 43%;
      .main {
        position: absolute;
        left: 0px;
        top: 30px;
        width: 700px;
        height: 460px;
      }
      .incomeCount {
        position: absolute;
        width: 700px;
        top: 372px;
        left: 0;
        font-size: 18px;
        color: $base_colo;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          width: 46%;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          font-size: 27px;
          align-items: baseline;
          & > div:first-child {
            position: relative;
            font-size: 16px;
            width: 130px;
            &:before {
              position: absolute;
              left: -20px;
              top: 18px;
              content: "";
              width: 13px;
              height: 13px;
              border-radius: 13px;
              background: #FFB508;
            }
          }
          & > div:last-child {
            color: #5BE9FA;
          }

          &:nth-of-type(2) > div:first-child:before {
            background: #FF4C4D;
          }
          &:nth-of-type(3) > div:first-child:before {
            background: #9702FE;
          }
          &:nth-of-type(4) > div:first-child:before {
            background: #00B4D2;
          }
          &:nth-of-type(5) > div:first-child:before {
            background: #00BD8D;
          }
        }
      }
    }
  }
  
}

</style>
