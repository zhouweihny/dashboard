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
              <em>50</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>48</em>
            </div>
            <div>
              <span>离线</span>
              <em>2</em>
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
              <em>30</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>25</em>
            </div>
            <div>
              <span>离线</span>
              <em>5</em>
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
              <em>60</em>
              <span>个</span>
            </div>
            <div>
              <span>在线</span>
              <em>60</em>
            </div>
            <div>
              <span>离线</span>
              <em>0</em>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'roomrent',
  data() {
    return {
      msg: 'roomrent',
      name: '房间租赁数据',
      legendArr: [],
      color: [],
      myChart: {},
      total: '235',
      zaixian: '205',
      lixian: '30',
      mjProgress: '96%',
      sbProgress: '83.333%',
      dbProgress: '100%',
    }
  },
  mounted() {

    
  },
  methods: {
    
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

  .ztop {
    width: 1482px;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 70px;
    margin-top: 30px;
    .zleft {
      width: 46%;
      justify-content: space-around;
      align-items: center;
      h4 {
        font-size: 26px;
        color: $base_colo;
      }
      .J_numBlock {
        height: 92px;
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
          width: 56px;
          background: #4F89B1;
          margin: 0 5px;
          text-align: center;
          font-size: 50px;
          font-weight: bold;
          line-height: 92px;
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
        height: 46px;
        justify-content: space-around;
        align-items: center;
        h4 {
          font-size: 26px;
          color: $base_colo;
        }
        .zuiProgress {
          width: 320px;
          height: 15px;
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
          font-size: 18px;
          & > div {
            padding-left: 15px;
          }
          em {
            font-style: normal;
            font-size: 30px;
            color: #5BE9FB;
          }
        }
      }
    }
  }
}

</style>
