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
            {{roomrent.contract.num}}
          </div>
          <div class="lastNum">
            <span>{{roomrent.contract.last}}</span>
            <i class="arrow " :class="roomrent.contract.arrow"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月房间续租量
          </div>
          <div class="num">
            {{roomrent.relet.num}}
          </div>
          <div class="lastNum">
            <span>{{roomrent.relet.last}}</span>
            <i class="arrow " :class="roomrent.relet.arrow"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月房间退租量
          </div>
          <div class="num">
            {{roomrent.throwalease.num}}
          </div>
          <div class="lastNum">
            <span>{{roomrent.throwalease.last}}</span>
            <i class="arrow " :class="roomrent.throwalease.arrow"></i>
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
      <div class="zui-flex ztit">
        <div class="fn-center">
          <p>办公室租用率</p>
          <p><em></em>共30间，余15</p>
        </div>
        <div class="fn-center">
          <p>移动办公租用率</p>
          <p><em></em>共30间，余15</p>
        </div>
        <div class="fn-center">
          <p>固定工位租用率</p>
          <p><em></em>共30间，余15</p>
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
  name: 'roomrent',
  computed: {
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'roomrent',
      name: '房间租赁数据',
      legendArr: [],
      color: [],
      myChart: {},
      roomrent: {
        "rentOut": "500",
        "residue": "200",
        "contract": {"num": "123","last": "110"},
        "relet": {"num": "56","last": "72"},
        "throwalease": {"num": "56","last": "12"},
        "bangongshi": {"rentOut": "32", "residue": "68", "sum": "30", "residue": "5"},
        "yidonggongwei": {"rentOut": "74", "residue": "26", "sum": "30", "residue": "5"},
        "gudinggongwei": {"rentOut": "18", "residue": "82", "sum": "30", "residue": "5"}
      }
    }
  },
  mounted() {

    console.log(this.storeAjaxData)

    /*var lineData = [];
    var barData = [];
    for (var i = 0; i < 12; i++) {
      var b = parseInt(Math.random() * 200, 10);
      var d = parseInt(Math.random() * 200, 10);
      barData.push(b)
      lineData.push(d + b);
    }*/

    if(this.storeAjaxData && this.storeAjaxData.roomrent){
      this.roomrent = this.storeAjaxData.roomrent;

      if(this.roomrent.contract.num > this.roomrent.contract.last){
        this.roomrent.contract.arrow = 'up'
      }else if(this.roomrent.contract.num < this.roomrent.contract.last){
        this.roomrent.contract.arrow = 'down'
      }
      if(this.roomrent.relet.num > this.roomrent.relet.last){
        this.roomrent.relet.arrow = 'up'
      }else if(this.roomrent.relet.num < this.roomrent.relet.last){
        this.roomrent.relet.arrow = 'down'
      }
      if(this.roomrent.throwalease.num > this.roomrent.throwalease.last){
        this.roomrent.throwalease.arrow = 'up'
      }else if(this.roomrent.throwalease.num < this.roomrent.throwalease.last){
        this.roomrent.throwalease.arrow = 'down'
      }
    }

    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.J_roomrent .main'));
    this.myChart.setOption({
      title: {

      },
      tooltip: {},
      series: [{
        name: '办公室',
        type: 'pie',
        radius: ['70%', '78%'],
        center: ['15%', '53%'],
        avoidLabelOverlap: false,
        color: '#00AFAA',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 32,
          name: '已租',
          itemStyle: {
            color: '#00AFAA'
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#00AFAA',
                fontSize: 18
              }
            },
            distance: 100
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}：{c}"
          }
        }, {
          value: 68,
          name: '待租',
          label: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}：{c}"
          },
          itemStyle: {
            normal: {
              color: '#3D414D',
            },
            emphasis: {
              color: '#3D414D'
            }
          },
        }]
      }, {
        name: '移动工位',
        type: 'pie',
        radius: ['70%', '78%'],
        center: ['49%', '53%'],
        avoidLabelOverlap: false,
        color: '#FFB408',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 74,
          name: '已租',
          itemStyle: {
            color: '#FFB408'
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#FFB408',
                fontSize: 18
              }
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}：{c}"
          }
        }, {
          value: 26,
          name: '待租',
          label: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}：{c}"
          },
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
        name: '固定工位',
        type: 'pie',
        radius: ['70%', '78%'],
        center: ['82%', '53%'],
        avoidLabelOverlap: false,
        color: '#FF4B4E',
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 18,
          name: '已租',
          itemStyle: {
            color: '#FF4B4E'
          },
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
            formatter: "{a}{b}：{c}"
          }
        }, {
          value: 82,
          name: '待租',
          label: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a}{b}：{c}"
          },
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
$base_colo: #7bb9dc;

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
      color: $base_colo;
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
      height: 105px;
    }

    .ztit {
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      color: $base_colo;
      margin-left: -10px;

      & > div {
        p {
          height: 22px;
          line-height: 22px;

          &:nth-child(2) {
            position: relative;
            em {
              font-style: normal;
              display: inline-block;
              vertical-align: middle;
              width: 10px;
              height: 10px;
              border-radius: 10px;
              background: #00AFAA;
              margin-right: 5px;
            }
          }
        }
        &:nth-child(2) p em {
          background: #FFB408;
        }
        &:nth-child(3) p em {
          background: #FF4B4E;
        }
      }
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
