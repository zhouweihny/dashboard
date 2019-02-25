<template>
  <div class="cwrap">
    <div class="top">
      <ul>
        <li class="zui-flex">
          <div class="tit">
            会议室使用数
          </div>
          <div class="num">
            {{number}}
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            会议室平均日使用频率
          </div>
          <div class="num">
            {{frequency}}
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            会议室空闲数
          </div>
          <div class="num">
            {{leisure}}
          </div>
        </li>
      </ul>
    </div>
     <h3 class="J_meetingroom_tit">日会议室使用情况(近30天)</h3>
    <div class="meetingroom">
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
      msg: 'meetingroom',
      name: '日会议室使用情况(近30天)',
      legendArr: [],
      color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
      myChart: {},
      number: 0,
      frequency: 0,
      leisure: 0,
      "meetingroomdata": {
        "number": "",
        "frequency": "",
        "leisure": "",
        "data":{
          "data":[],
          "day":[]
        }
      },
    }
  },
  mounted() {
    
  },
  methods: {
    zinit () {
      /*var dayData =[];
      for(var i=0; i<32; i++){
        if (i%2 !=0) {
          var r = i;
          dayData.push(r);
        };
      }

      var resultData =[];
      var _data = [150, 105, 204, 125, 190, 122, 208, 160, 210, 120, 190, 150, 120, 190, 150, 200]
      _data.forEach( v =>{
        resultData.push(v);
      })*/

      if(this.storeAjaxData && this.storeAjaxData.meetingroomdata){
        this.meetingroomdata = this.storeAjaxData.meetingroomdata;

        
        this.number = this.meetingroomdata.number;
        this.frequency = this.meetingroomdata.frequency;
        this.leisure = this.meetingroomdata.leisure;

        var dayData = this.meetingroomdata.data.day;
        var resultData = this.meetingroomdata.data.data;
      }

      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.querySelector('.meetingroom .main'));
      this.myChart.setOption({
        title:{
          textStyle:{
              color:"#6a9cd5",
          },
          text:'',
          left:"center",
        },
        tooltip: {//鼠标悬浮弹出提示框
            trigger:'axis', //提示框弹出的触发时间，折线图和柱状图为axis
            formatter:"{b}号{a}为: {c}次"//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
        },
        grid: {//统计图距离边缘的距离
          top: '8%',
          left: '10%',
          right: '10%',
          bottom: '8%'
        },
        xAxis: [{//x轴
          type: 'category',//数据类型为不连续数据
          boundaryGap: false,//坐标轴两边是否留白
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#233e64' //x轴颜色
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
          name: "次数",
          nameGap: 10,//与轴线间距
          nameTextStyle: {
            color: '#5BEAFB'
          },
          min: 0,//y轴上的刻度最小值
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
              color: '#233e64' //y轴颜色
            },
          },
          axisLabel: {//y轴的标签相关设置
            textStyle: {
              color: '#5CEBFC',
            },
          },
          axisTick: { show: true,},  //刻度点数轴
        }],
        series: [{
          name: '会议室使用数',
          type: 'line',//统计图类型为折线图
          smooth: true, //是否平滑曲线显示
          symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
          lineStyle: {//线条的相关设置
            normal: {
              color: "#3deaff"   // 线条颜色
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
          data: resultData //值
        }]
      });
    }
  }
}
</script>

<style scoped lang="scss">
$base_colo: #7bb9dc;
.cwrap{
  .top{
    display: flex;
    justify-content:center;

    ul {
      width: 100%;
      display: flex;
      justify-content:space-around;
      li {
        position: relative;
        padding-left: 20px;
        height: 60px;
        font-size: 17px;
        color: $base_colo;
        justify-content: space-between;
        align-items: baseline;

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

        div {
          vertical-align: middle;
        }

        .num {
          margin-left:30px;
          color: #5BEAFB;
          font-size: 26px;
        }

        .lastNum {}
      }
    } 
  }

  .J_meetingroom_tit{
    display: flex;
    justify-content: center;
    margin-top: 9px;
  } 

  .main {
    width: 800px;
    height: 300px;
  }

  
}
</style>