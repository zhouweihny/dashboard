<template>
  <div class="cwrap">
    <div class="left">
      <div class="dot">本月企业服务评分</div>
      <div class="zui-flex zpoint">
        <div class="num">{{num}}</div>
        <div>{{last}} <i class="arrow up"></i></div>
      </div>

      <span class="ztips">上月同期</span>
    </div>

    <div class="right">
      <div class="servequalitydata">
        <div class="main"></div>  
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
  name: 'servequalitydata',
  computed: {
    ...mapState(['storeAjaxData'])
  },
  data() {
    return {
      msg: 'servequalitydata',
      name: '企业服务评分结构',
      num: '',
      last: '',
      "servequalitydata": {
        "num": "",
        "last": "",
        "data": {
          "taidu": [],
          "xiaolv": [],
          "zhiliang": []
        }
      }
    }
  },
  mounted() {
        
  },
  methods: {
    zinit () {
      if(this.storeAjaxData && this.storeAjaxData.servequalitydata){
        this.servequalitydata = this.storeAjaxData.servequalitydata;
        this.num = this.servequalitydata.num;
        this.last = this.servequalitydata.last;
        var dataS = this.servequalitydata.data;
        var data = [];
        data.push(dataS.xiaolv[0]);
        data.push(dataS.taidu[0]);
        data.push(dataS.zhiliang[0]);

        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.querySelector('.servequalitydata .main'));
        this.myChart.setOption({
          radar: {
            center: ['50%', '68%'],//图表位置
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#72ACD1',
              }
            },
            axisLine: {
              lineStyle: {
                color: '#214770'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['#08112E', '#08112E', '#08112E', '#08112E'],
                shadowColor: '#08112E'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#214770'
              }
            },
            indicator: [{
                name: '效率',
                max: 50
              },
              {
                name: '态度',
                max: 50
              },
              {
                name: '质量',
                max: 50
            }]
          },
          series: [{
            type: 'radar',
            data: [{
              value: data,
              name: '企业服务评分结构',
              symbolSize: 0,
              lineStyle: {
                normal: {
                  color: '#5CEAFB'
                }
              },
              areaStyle: {
                normal: {
                  color: '#317F96'
                }
              }
            }]
          }],
          tooltip: {//鼠标悬浮弹出提示框
            trigger:'item', //提示框弹出的触发时间，折线图和柱状图为axis
            formatter (params, ticket, callback) {
              var _xv = parseInt(params.value[0], 10)/10,
                _td = parseInt(params.value[1], 10)/10,
                _zl = parseInt(params.value[2], 10)/10,
                str = "本月企业服务平均评分"+"<br>";

              if(_xv)
                str += "效率："+_xv+"分<br>";
              if(_td)
                str += "态度："+_td+"分<br>";
              if(_zl)
                str += "质量："+_zl+"分";

              return str;
            }
          }
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
$base_colo: #7bb9dc;
.cwrap{
  display: flex;
  justify-content: space-between;
  width: 21rem;
  height: 8rem;
  .right {
    width: 46%;
  }
  .left{
    width: 46%;
    position: relative;
    padding-top: 2.5rem;
    .dot{
      min-width: 12rem;
      color: $base_colo;
      padding-left: 2.5rem;
      font-size: .7rem;
      &:before {
        position: absolute;
        left: 1.6rem;
        top: 2.7rem;
        content: "";
        width: .4rem;
        height: .4rem;
        border-radius: .4rem;
        background: #8FD3FA;
      }
    }
    .zpoint {
      justify-content: space-around;
      align-items: center;
      height: 2rem;
      padding-top: 2.2rem;
      div {
        font-size: .7rem;
        color: $base_colo;
      }
      .num {
        color: #5AE9FA;
        font-size: 1rem;
      }
    }
    .ztips {
      position: absolute;
      right: 2rem;
      top: 4rem;
      font-size: .5rem;
      color: #8e9096;
    }
  }
  .main {
    width: 10rem;
    height: 7.5rem;
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