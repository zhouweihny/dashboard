<template>
	<div class="cwrap">
		<div class="top">
      <ul>
        <li class="zui-flex">
          <div class="tit">
            今日在园人数
          </div>
          <div class="num">
            {{num}}
          </div>
        </li>
      </ul>
    </div>
    <h3 class="J_crewcase_tit">在园人数曲线图(近30天)</h3>
		<div class="crewcase">
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
  name: 'crewcase',
  computed: {
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'yearroomrent',
      name: '在园人数曲线图(近30天)',
      legendArr: [],
      color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
      myChart: {},
      num: 0,
      "crewcase": {
        "number": "",
        "data": {
          "data": [],
          "day": []
        }
      }
    }
  },
  mounted() {
    
        
  },
  methods: {
    zinit () {
      if(this.storeAjaxData && this.storeAjaxData.crewcase){
        this.crewcase = this.storeAjaxData.crewcase;

        this.num = this.crewcase.number;
        var dayData = this.crewcase.data.day;
        var resultData = this.crewcase.data.data;
      }

      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.querySelector('.crewcase .main'));
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
          formatter:"{b}号{a}为: {c}人"//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
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
            formatter: (value) => {
              return this.moment(value, "YYYY-MM-DD").format("DD");
            }
          },
          axisTick: { show: true,},//刻度点数轴
          data: dayData 
        }],
        yAxis: [{//y轴的相关设置
          type: 'value',//y轴数据类型为连续的数据
          name: "人数",
          min: 0,
          nameTextStyle: {
            color: '#5BEAFB'
          },
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
          name: '入住人数',
          type: 'line',//统计图类型为折线图
          smooth: true, //是否平滑曲线显示
          symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
          lineStyle: {//线条的相关设置
            normal: {
              color: "#3deaff",   // 线条颜色
              width: 2
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
      li {
        position: relative;
        padding-left: .7rem;
        height: 2rem;
        line-height: 2rem;
        font-size: .6rem;
        color: $base_colo;
        justify-content: space-between;
        align-items: center;
        &:before {
          position: absolute;
          left: 0;
          top: .78rem;
          content: "";
          width: .4rem;
          height: .4rem;
          border-radius: .4rem;
          background: #8FD3FA;
        }
        div {
          vertical-align: middle;
        }
        .num {
          margin-left: 1rem;
          color: #5BEAFB;
          font-size: .9rem;
        }
        .lastNum {}
      }
    } 
  }
  .J_crewcase_tit{
    position: absolute;
    top: 2.5rem;
    right: 7.8rem;
    font-size: .6rem;
    color: #fff;
  }
  .crewcase {
    position: absolute;
    top: 1.5rem;
    left: 0;
    height: 9rem;
    .main {
      width: 23rem;
      height: 12rem;
    }
  }
}
</style>