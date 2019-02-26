<template>
  <div class="zui-flex cwrap">
    <h3 class="J_zdevice_tit">设备在线情况</h3>
    <div class="zui-flex ztop">
      <div class="zui-flex zleft">
        <div>
          <h4>总量</h4>
          <div class="zui-flex-center J_numBlock">
            <div v-for="(item, index) in total.split('')" :key="index" class="J_num" >{{item}}</div><div>个</div>
          </div>
        </div>
        <div>
          <h4>在线</h4>
          <div class="zui-flex-center J_numBlock">
            <div v-for="(item, index) in zaixian.split('')" :key="index" class="J_num" >{{item}}</div><div>个</div>
          </div>
        </div>
        <div>
          <h4>离线</h4>
          <div class="zui-flex-center J_numBlock">
            <div v-for="(item, index) in lixian.split('')" :key="index" class="J_num" >{{item}}</div><div>个</div>
          </div>
        </div>
      </div>

      <div class="zright">
        <div class="zui-flex item">
          <h4>门禁</h4>
          <div class="zuiProgress">
            <div class="progress-bar" :style="{width: mjProgress}"></div>
          </div>
          <div class="zui-flex zcount">
            <div>
              <span>共</span>
              <em>{{zdevice.menjin.sum}}</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>{{zdevice.menjin.onLine}}</em>
            </div>
            <div>
              <span>离线</span>
              <em>{{zdevice.menjin.offLine}}</em>
            </div>
          </div>
        </div>
        <div class="zui-flex item">
          <h4>水表</h4>
          <div class="zuiProgress">
            <div class="progress-bar" :style="{width: sbProgress}"></div>
          </div>
          <div class="zui-flex zcount">
            <div>
              <span>共</span>
              <em>{{zdevice.shuibiao.sum}}</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>{{zdevice.shuibiao.onLine}}</em>
            </div>
            <div>
              <span>离线</span>
              <em>{{zdevice.shuibiao.offLine}}</em>
            </div>
          </div>
        </div>
        <div class="zui-flex item">
          <h4>电表</h4>
          <div class="zuiProgress">
            <div class="progress-bar" :style="{width: dbProgress}"></div>
          </div>
          <div class="zui-flex zcount">
            <div>
              <span>共</span>
              <em>{{zdevice.dianbiao.sum}}</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>{{zdevice.dianbiao.onLine}}</em>
            </div>
            <div>
              <span>离线</span>
              <em>{{zdevice.dianbiao.offLine}}</em>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 class="J_zenergy_tit">本月能耗情况</h3>
    <div class="zui-flex zenergy">
      <div>电量<span>{{zdevice.benyuenenghao.dian}}</span>度</div>
      <div>冷水量<span>{{zdevice.benyuenenghao.shui}}</span>吨</div>
      <div>热水量<span>{{zdevice.benyuenenghao.reshui}}</span>吨</div>
    </div>

    <h4 class="energyTit">日水电监控（近30日）</h4>
    <div class="energyDay">
      <div class="main"></div>
    </div>

    <h4 class="energyTit">月水电监控（近12个月）</h4>
    <div class="energyYear">
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
  name: 'zdevice',
  computed: {
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'zdevice',
      name: '设备信息',
      legendArr: [],
      color: [],
      myChart: {},
      total: '235',
      zaixian: '205',
      lixian: '30',
      mjProgress: '96%',
      sbProgress: '83.333%',
      dbProgress: '100%',

      "zdevice":{
        "sum": "",
        "onLine": "",
        "offLine": "",
        "menjin": {
          "sum": 0,
          "onLine": 0,
          "offLine": 0
        },
        "shuibiao":{
          "sum": 0,
          "onLine": 0,
          "offLine": 0
        },
        "dianbiao": {
          "sum": 0,
          "onLine": 0,
          "offLine": 0,
        },
        "benyuenenghao": {
          "dian":0,
          "shui":0,
          "reshui":0
        },
        "energyDay": {
          "shui": [],
          "dian": [],
          "day": []
        },
        "energyYear": {
          "shui": [],
          "dian": [],
          "day": []
        }
      },
    }
  },
  mounted() {
    
  },
  methods: {
    zinit () {
      this.initCharts('energyDay');
      setTimeout(()=>{
        this.initCharts('energyYear');
      }, 500)
    },

    initCharts (type) {
      /*var dayData =[];

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
      }*/


      if(this.storeAjaxData && this.storeAjaxData.zdevice){
        this.zdevice = this.storeAjaxData.zdevice;
        this.total = this.zdevice.sum + '' || '';
        this.zaixian = this.zdevice.onLine + '';
        this.lixian = this.zdevice.offLine + '';

        var dayData =[];
        if(type == 'energyDay'){
          dayData = this.zdevice.energyDay.day;
        }else{
          dayData = this.zdevice.energyYear.day;
        }

        var lineData = [];
        var lineData2 = [];
        if(type == 'energyDay'){
          lineData = this.zdevice.energyDay.shui;
          lineData2 = this.zdevice.energyDay.dian;
        }else{
          lineData = this.zdevice.energyYear.shui;
          lineData2 = this.zdevice.energyYear.dian;
        }

        var barData = this.zdevice.qiandan;
        var yuefen = this.zdevice.yuefen;

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
            left: 40,
            top: 30,
            itemGap: 30,
            itemWidth: 30
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
            smooth: false,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex : 1,
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
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {
  position: relative;
  width: 43rem;
  height: 24rem;
  .J_zdevice_tit {
    position: absolute;
    top: 1.2rem;
    left: 2rem;
    font-size: .9rem;
    color: #5CEAFB;
  }

  .ztop {
    width: 43rem;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 3.5rem;
    .zleft {
      width: 46%;
      padding-top: .5rem;
      padding-left: .8rem;
      justify-content: space-around;
      align-items: center;
      h4 {
        font-size: .8rem;
        color: $base_colo;
      }
      .J_numBlock {
        height: 2.7rem;
        margin-top: 10px;
        align-items: flex-end;
        & > div {
          vertical-align: middle;
          color: $base_colo;
          &:last-child {
            margin-left: 10px;
          }
        }
        .J_num {
          width: 1.5rem;
          background: #4F89B1;
          margin: 0 .15rem;
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          line-height: 2.7rem;
          color: #fff;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
    .zright {
      width: 46%;
      color: $base_colo;
      .item {
        height: 1.65rem;
        justify-content: space-around;
        align-items: center;
        h4 {
          font-size: .8rem;
          color: $base_colo;
        }
        .zuiProgress {
          width: 8.5rem;
          height: .5rem;
          display: flex;
          background-color: #3C404C;
          border-radius: 20px;
          .progress-bar {
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            color: #fff;
            text-align: center;
            background-color: #00AFAA;
            transition: width .6s ease;
            border-radius: 20px;
          }
        }

        &:nth-child(2) {
          .zuiProgress {
            .progress-bar {
              background-color: #FEB407
            }
          }
        }
        &:nth-child(3) {
          .zuiProgress {
            .progress-bar {
              background-color: #FF4C4D
            }
          }
        }

        .zcount {
          font-size: .5rem;
          & > div {
            padding-left: .3rem;
          }
          em {
            font-style: normal;
            font-size: 1rem;
            color: #5BE9FB;
          }
        }
      }
    }
  }

  .J_zenergy_tit {
    position: absolute;
    top: 8.9rem;
    left: 2rem;
    font-size: .9rem;
    color: #5CEAFB;
  }

  .zenergy {
    width: 40rem;
    align-items: flex-start;
    position: absolute;
    left: 2rem;
    top: 11rem;
    justify-content: flex-start;
    font-size: .8rem;
    & > div {
      position: relative;
      min-width: 12rem;
      color: $base_colo;
      padding-left: 1rem;
      &:before {
        position: absolute;
        left: .2rem;
        top: .55rem;
        content: "";
        width: .4rem;
        height: .4rem;
        border-radius: .4rem;
        background: #8FD3FA;
      }
      span {
        color: #5BEAFA;
        font-size: 1.2rem;
        display: inline-block;
        margin: 0 6px;
      }
    }
  }

  .energyTit {
    position: absolute;
    top: 13.38rem;
    left: 8.45rem;
    font-size: .6rem;
    color: #fff;
    &:nth-of-type(2) {
      left: 28.7rem;
    }
  }

  .energyDay, .energyYear {
    position: absolute;
    top: 13rem;
    width: 18rem;
    height: 8.3rem;
    .main {
      width: 18rem;
      height: 10.3rem;
    }
  }

  .energyDay {
    left: 2.5rem;
  }
  .energyYear {
    left: 23.3rem;
  }
}

</style>
