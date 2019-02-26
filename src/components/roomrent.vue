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
          <span>{{roomrent.rentOut}}</span>
        </div>
        <div class="rent rentLast">
          房间剩余数
          <span>{{roomrent.residue}}</span>
        </div>
      </div>
      <div class="main"></div>
      <div class="zui-flex ztit">
        <div class="fn-center">
          <p>办公室</p>
          <p><em></em>共{{roomrent.bangongshi.sum}}间，余{{roomrent.bangongshi.residue}}</p>
        </div>
        <div class="fn-center">
          <p>移动办公</p>
          <p><em></em>共{{roomrent.yidonggongwei.sum}}间，余{{roomrent.yidonggongwei.residue}}</p>
        </div>
        <div class="fn-center">
          <p>固定工位</p>
          <p><em></em>共{{roomrent.gudinggongwei.sum}}间，余{{roomrent.gudinggongwei.residue}}</p>
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
        "rentOut": "",
        "residue": "",
        "contract": {"num": "","last": ""},
        "relet": {"num": "","last": ""},
        "throwalease": {"num": "","last": ""},
        "bangongshi": {"rentOut": "", "residue": "", "sum": "", "residue": ""},
        "yidonggongwei": {"rentOut": "", "residue": "", "sum": "", "residue": ""},
        "gudinggongwei": {"rentOut": "", "residue": "", "sum": "", "residue": ""}
      }
    }
  },
  mounted() {

  },
  methods: {
    zinit() {
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
      let _that = this;

      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.querySelector('.J_roomrent .main'));
      this.myChart.setOption({
        title: {

        },
        tooltip: {},
        series: [{
          name: '办公室',
          type: 'pie',
          radius: ['55%', '60%'],
          center: ['15%', '47%'],
          avoidLabelOverlap: false,
          color: '#00AFAA',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: _that.roomrent.bangongshi.rentOut,
            name: '已租',
            itemStyle: {
              color: '#00AFAA'
            },
            label: {
              normal: {
                formatter: '{d} %',
                textStyle: {
                  color: '#00AFAA',
                  fontSize: 10
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a}{b}：{c}"
            }
          }, {
            value: _that.roomrent.bangongshi.residue,
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
          radius: ['55%', '60%'],
          center: ['48%', '47%'],
          avoidLabelOverlap: false,
          color: '#FFB408',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: _that.roomrent.yidonggongwei.rentOut,
            name: '已租',
            itemStyle: {
              color: '#FFB408'
            },
            label: {
              normal: {
                formatter: '{d} %',
                textStyle: {
                  color: '#FFB408',
                  fontSize: 12
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a}{b}：{c}"
            }
          }, {
            value: _that.roomrent.yidonggongwei.residue,
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
          radius: ['55%', '60%'],
          center: ['81%', '47%'],
          avoidLabelOverlap: false,
          color: '#FF4B4E',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: _that.roomrent.gudinggongwei.rentOut,
            name: '已租',
            itemStyle: {
              color: '#FF4B4E'
            },
            label: {
              normal: {
                formatter: '{d} %',
                textStyle: {
                  fontSize: 12
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a}{b}：{c}"
            }
          }, {
            value: _that.roomrent.gudinggongwei.residue,
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
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base_colo: #7bb9dc;

.cwrap {

  .left {
    width: 9.2rem;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;

    .ztips {
      position: absolute;
      right: -3px;
      top: 12px;
      font-size: .5rem;
      color: #8e9096;
    }

    ul {
      width: 9.2rem;
      li {
        position: relative;
        padding-left: .7rem;
        height: 2rem;
        font-size: .6rem;
        color: $base_colo;
        justify-content: space-between;
        align-items: baseline;

        &:before {
          position: absolute;
          left: 0;
          top: .4rem;
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
          color: #5BEAFB;
          font-size: .9rem;
        }

        .lastNum {}
      }
    }
  }

  .right {
    flex: 1;
    padding-left: 1rem;

    .total {
      height: 1rem;
      line-height: 1rem;
      font-size: .6rem;
      color: $base_colo;
      justify-content: space-around;
      padding-top: 0.35rem;

      .rent {
        position: relative;

        &:before {
          position: absolute;
          left: -0.7rem;
          top: .3rem;
          content: "";
          width: .4rem;
          height: .4rem;
          border-radius: .4rem;
          background: #8FD3FA;
        }

        span {
          color: #5BEAFB;
          font-size: .85rem;
          display: inline-block;
          margin-left: .2rem;
        }

        &.rentLast {}
      }
    }

    .main {
      width: 100%;
      height: 4.5rem;
    }

    .ztit {
      justify-content: space-around;
      align-items: center;
      font-size: .5rem;
      color: $base_colo;
      margin-left: -.4rem;
      margin-top: -.9rem;

      & > div {
        p {
          height: 1rem;
          line-height: 1rem;

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
