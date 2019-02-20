<template>
  <div class="zui-flex cwrap">
    <div class="left">
      <span class="ztips">上月同期</span>
      <ul>
        <li class="zui-flex">
          <div class="tit">
            本月房间新签约量
          </div>
          <div class="num">
            123
          </div>
          <div class="lastNum">
            <span>110</span>
            <i class="arrow up"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月房间续租量
          </div>
          <div class="num">
            56
          </div>
          <div class="lastNum">
            <span>72</span>
            <i class="arrow down"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月房间退租量
          </div>
          <div class="num">
            62
          </div>
          <div class="lastNum">
            <span>52</span>
            <i class="arrow up"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="zui-flex total">
        <div class="rent">
          房间租用数
          <span>500</span>
        </div>
        <div class="rent rentLast">
          房间剩余数
          <span>200</span>
        </div>
      </div>
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
    ...mapState(['storecolor'])
  },
  data() {
    return {
      msg: 'roomrent',
      name: '房间租赁数据',
      legendArr: [],
      color: [],
      myChart: {},
    }
  },
  mounted() {

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
    this.myChart = echarts.init(document.querySelector('.J_roomrent .main'));
    this.myChart.setOption({
      title:{
        
      },
      tooltip: {
      },
      legend: { //图例组件，颜色和名字
        left: '0',
        bottom: '0',
        itemWidth: 12,
        itemHeight: 12,
        data: ['吊销注销', '到期注销', '申请注销'],
        textStyle: {
          fontStyle: 'normal',
          fontSize: 14,
          color: '#7bb9dc'
        }
      },
      series: [{
        name: '吊销注销',
        type: 'pie',
        radius: ['43%', '50%'],
        center: ['15%', '50%'],
        color: '#00AFAA',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 32,
          name: '吊销注销数',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 18
              }
            },
            distance: 100
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} {b} {c}"
          }
        }, {
          value: 68,
          itemStyle: {
            normal: {
              color: '#3D414D'
            },
            emphasis: {
              color: '#3D414D'
            }
          },
        }]
      }, {
        name: '到期注销',
        type: 'pie',
        radius: ['43%', '50%'],
        center: ['45%', '50%'],
        color: '#FFB408',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 54,
          name: '到期注销数',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 18
              }
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}"
          }
        }, {
          value: 46,
          itemStyle: {
            normal: {
              color: '#3D414D'
            },
            emphasis: {
              color: '#3D414D'
            }
          },
        }]
      }, {
        name: '申请注销',
        type: 'pie',
        radius: ['43%', '50%'],
        center: ['75%', '50%'],
        color: '#FF4B4E',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 18,
          name: '申请注销数',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 18
              }
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 申请注销数 : {c}"
          }
        }, {
          value: 82,
          itemStyle: {
            normal: {
              color: '#3D414D'
            },
            emphasis: {
              color: '#3D414D'
            }
          },
        }]
      }]
    });
  },
  methods: {
    zinit() {

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cwrap {

  .left {
    width: 300px;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;

    .ztips {
      position: absolute;
      right: -3px;
      top: 12px;
      font-size: 13px;
      color: #8e9096;
    }

    ul {
      li {
        position: relative;
        padding-left: 20px;
        height: 60px;
        font-size: 17px;
        color: #7bb9dc;
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
          color: #5BEAFB;
          font-size: 26px;
        }

        .lastNum {}
      }
    }
  }

  .right {
    flex: 1;
    padding-left: 80px;

    .total {
      height: 30px;
      line-height: 30px;
      font-size: 17px;
      color: #7bb9dc;
      justify-content: space-around;

      .rent {
        position: relative;

        &:before {
          position: absolute;
          left: -20px;
          top: 11px;
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
          margin-left: 17px;
        }

        &.rentLast {}
      }
    }

    .main {
      width: 400px;
      height: 180px;
    }
  }
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

</style>
