<template>
  <div class="mainpage" id="mainpage">
    <!-- 顶部中间标题 -->
    <!-- <dashTit></dashTit> -->
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

      <div class="item J_workorder">
        <!-- 工单信息 -->
        <!-- <workorder></workorder> -->
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

import page1 from '@/components/page1'
import dashTit from '@/components/dashTit'
import roomrent from '@/components/roomrent'
import yearroomrent from '@/components/yearroomrent'
import workorder from '@/components/workorder'
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
    workorder,
    page1,
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
    &.J_workorder {
      left: 540px;
      top: 50px;
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
