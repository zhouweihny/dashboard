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

      <div class="item J_zincome">
        <zincome></zincome>
      </div>

      <h3 class="J_clientdata_tit">客户数据</h3>
      <div class="item J_clientdata">
        <clientdata></clientdata>
      </div>

      <h3 class="J_crewcase_tit">在园人数情况</h3>
      <div class="item J_crewcase">
        <crewcase></crewcase>
      </div>

      <h3 class="J_meetingroomdata_tit">会议室使用数据</h3>
      <div class="item J_meetingroomdata">
        <meetingroomdata></meetingroomdata>
      </div>
  
      <h3 class="J_servequalitydata_tit">服务品质数据</h3>
      <h3 class="J_servequalitydata_tit2">企业服务评分结构</h3>
      <div class="item J_servequalitydata">
        <servequalitydata></servequalitydata>
      </div>

    </div>
  </div>
</template>

<script>

import http from '@/util/http'
import dashTit from '@/components/dashTit'
import roomrent from '@/components/roomrent'
import yearroomrent from '@/components/yearroomrent'
import monthroomrent from '@/components/monthroomrent'
import workorder from '@/components/workorder'
import zdevice from '@/components/zdevice'
import zincome from '@/components/zincome'
import clientdata from '@/components/clientdata'
import crewcase from '@/components/crewcase'
import meetingroomdata from '@/components/meetingroomdata'
import servequalitydata from '@/components/servequalitydata'

export default {
  name: 'home',
  components: {
    dashTit,
    roomrent,
    yearroomrent,
    monthroomrent,
    workorder,
    zdevice,
    zincome,
    clientdata,
    crewcase,
    meetingroomdata,
    servequalitydata
  },
  data () {
    return {
      title: '优糖星创园监控中心'
    }
  },
  mounted() {
    http.get('http://192.168.1.159/api/backend/v1/category/listByVenue').then(response => {
      console.log(response)
    })
  }
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
 /* // width: 1920px;
  // height: 1080px;
  // width: 5760px;
  // height: 3240px;*/
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
  position: relative;
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
      left: 985px;
      top: 290px;
      width: 1500px;
      height: 640px;
    }
    &.J_zincome {
      left: 985px;
      top: 1202px;
      width: 1500px;
      height: 640px;
    }
    &.J_clientdata{
      right: 80px;
      top: 200px;
      width: 780px;
      height: 190px;
    }
    &.J_crewcase{
      right:80px;
      top: 458px;
      width: 780px;

    }
    &.J_meetingroomdata{
      right: 80px;
      top: 1010px;
      width: 780px;
    }
    &.J_servequalitydata{
      right: 80px;
      top: 1582px;
      width: 780px;
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

  .J_clientdata_tit{
    position: absolute;
    top: 110px;
    right: 420px;
    font-size: 26px;
    color: #7bb9dc;
  }
  .J_crewcase_tit{
    position: absolute;
    top: 365px;
    right: 388px;
    font-size: 26px;
    color: $base_colo;
  }
  .J_meetingroomdata_tit{
    position: absolute;
    top: 918px;
    right: 388px;
    font-size: 26px;
    color: #7bb9dc;
  }
  .J_servequalitydata_tit{
    position: absolute;
    top: 1475px;
    right: 388px;
    font-size: 26px;
    color: #7bb9dc;
  }
  .J_servequalitydata_tit2{
    position: absolute;
    top: 1590px;
    right: 388px;
    font-size: 22px;
  }
}
</style>
