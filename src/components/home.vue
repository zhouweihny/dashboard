<template>
  <div class="mainpage" id="mainpage">
    <div class="zui-flex J_weather">
      <div>2019年02月16日</div>
      <div>6℃ ~ 11℃</div>
      <div>雨</div>
    </div>
    <div class="zui-flex J_parkNum">
      <div>车辆在园：100</div>
      <div>剩余车位：20</div>
    </div>
    <!-- 中间内容区 -->
    <div class="J_main" id="J_main">
      <h3 class="J_roomrent_tit">房间租赁数据</h3>
      <div class="item J_roomrent">
        <roomrent></roomrent>
      </div>

      <h3 class="J_yearroomrent_tit">月房间签单/续租/退租（近年）</h3>
      <div class="item J_yearroomrent">
        <yearroomrent></yearroomrent>
      </div>

      <h3 class="J_monthroomrent_tit">房间收入月柱状图</h3>
      <div class="item J_monthroomrent">
        <monthroomrent></monthroomrent>
      </div>

      <h3 class="J_workorder_tit">月工单数量（维修、保洁、其他）</h3>
      <div class="item J_workorder">
        <workorder></workorder>
      </div>

      <div class="item J_zdevice">
        <zdevice></zdevice>
      </div>

    </div>
  </div>
</template>

<script>

import page1 from '@/components/page1'
import dashTit from '@/components/dashTit'
import roomrent from '@/components/roomrent'
import yearroomrent from '@/components/yearroomrent'
import monthroomrent from '@/components/monthroomrent'
import workorder from '@/components/workorder'
import zdevice from '@/components/zdevice'

export default {
  name: 'home',
  components: {
    dashTit,
    roomrent,
    yearroomrent,
    monthroomrent,
    workorder,
    zdevice,
    page1
  },
  data () {
    return {
      title: '优糖星创园监控中心'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style scoped lang="scss">
$base_colo: #7bb9dc;

.mainpage {
  background: url(../../static/bj.jpg) left top no-repeat;
  // width: 1920px;
  // height: 1080px;
  // width: 5760px;
  // height: 3240px;
  width: 3450px;
  height: 1940px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
}

.J_weather, .J_parkNum {
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 80px;
  justify-content: space-around;
  align-items: center;
  color: $base_colo;
  font-size: 30px;
}
.J_weather {
  width: 500px;
  left: 840px;
}
.J_parkNum {
  width: 460px;
  left: 2100px;
}

.J_main {
  .item {
    position: absolute;

    &.J_roomrent {
      left: 87px;
      top: 220px;
      width: 780px;
      height: 190px;
    }
    &.J_yearroomrent {
      left: 94px;
      top: 494px;
      width: 766px;
      height: 300px;
    }
    &.J_monthroomrent {
      left: 94px;
      top: 914px;
      width: 766px;
      height: 300px;
    }
    &.J_workorder {
      left: 94px;
      top: 1504px;
      width: 766px;
      height: 300px;
    }
    &.J_zdevice {
      left: 1087px;
      top: 320px;
      width: 780px;
      height: 190px;
    }
  }
  .J_roomrent_tit {
    position: absolute;
    top: 110px;
    left: 388px;
    font-size: 26px;
    color: #7bb9dc;
  }
  .J_yearroomrent_tit {
    position: absolute;
    top: 452px;
    left: 335px;
    font-size: 21px;
    color: #fff;
  }
  .J_monthroomrent_tit {
    position: absolute;
    top: 869px;
    left: 388px;
    font-size: 21px;
    color: #fff;
  }
  .J_workorder_tit {
    position: absolute;
    top: 1488px;
    left: 330px;
    font-size: 21px;
    color: #fff;
  }
}
</style>
