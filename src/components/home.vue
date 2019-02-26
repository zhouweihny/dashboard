<template>
  <div>
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
          <roomrent ref="roomrent"></roomrent>
        </div>

        <h3 class="J_yearroomrent_tit">月房间签单/续租/退租（近年）</h3>
        <div class="item J_yearroomrent">
          <yearroomrent ref="yearroomrent"></yearroomrent>
        </div>

        <h3 class="J_monthroomrent_tit">房间收入月柱状图</h3>
        <div class="item J_monthroomrent">
          <monthroomrent ref="monthroomrent"></monthroomrent>
        </div>

        <h3 class="J_workorder_tit">月工单数量（维修、保洁、其他）</h3>
        <div class="item J_workorder">
          <workorder ref="workorder"></workorder>
        </div>

        <div class="item J_zdevice">
          <zdevice ref="zdevice"></zdevice>
        </div>

        <div class="item J_zincome">
          <zincome ref="zincome"></zincome>
        </div>

        <h3 class="J_clientdata_tit">客户数据</h3>
        <div class="item J_clientdata">
          <clientdata ref="clientdata"></clientdata>
        </div>

        <h3 class="J_crewcase_tit">在园人数情况</h3>
        <div class="item J_crewcase">
          <crewcase ref="crewcase"></crewcase>
        </div>

        <h3 class="J_meetingroomdata_tit">会议室使用数据</h3>
        <div class="item J_meetingroomdata">
          <meetingroomdata ref="meetingroomdata"></meetingroomdata>
        </div>
    
        <h3 class="J_servequalitydata_tit">服务品质数据</h3>
        <h3 class="J_servequalitydata_tit2">企业服务评分结构</h3>
        <div class="item J_servequalitydata">
          <servequalitydata ref="servequalitydata"></servequalitydata>
        </div>

      </div>
    </div>

    <div class="circleWrap" v-if="showLoading">
      <div id="circle"></div><div id="circle1"></div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

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
      title: '优糖星创园监控中心',
      showLoading: true
    }
  },
  methods: {
    ...mapMutations(['setStoreAjaxData']),
  },
  mounted() {
    http.get('http://192.168.1.159/statistics').then(response => {
      if(response.status == 200){
        // let data = JSON.parse(response.data);
        let data = eval('('+response.data+')');
        console.log(JSON.stringify(data));
        // let data = {"roomrent": {"rentOut": "500", "residue": "200", "contract": {"num": "123","last": "110"}, "relet": {"num": "56","last": "72"}, "throwalease": {"num": "56","last": "12"}, "bangongshi": {"rentOut": "32", "residue": "68", "sum": "30", "residue": "5"}, "yidonggongwei": {"rentOut": "74", "residue": "26", "sum": "30", "residue": "5"}, "gudinggongwei": {"rentOut": "18", "residue": "82", "sum": "30", "residue": "5"} }, "yearroomrent": {"qiandan":[ 192, 146, 41, 163, 182, 30, 4, 93, 41, 76, 169, 60], "xiuzhu": [ 316, 314, 239, 88, 139, 294, 260, 153, 181, 98, 232, 57], "tuizhu": [ 380, 558, 332, 328, 262, 208, 198, 368, 171, 298, 328, 377], "yuefen": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "monthroomrent":{"qiandan":[ 192, 146, 41, 163, 182, 30, 4, 93, 41, 76, 169, 60], "xiuzhu": [ 316, 314, 239, 88, 139, 294, 260, 153, 181, 98, 232, 57], "tuizhu": [ 380, 558, 332, 328, 262, 208, 198, 368, 171, 298, 328, 377], "yuefen": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "workorder": {"total": 500, "daichuli": 200, "data": {"weixiu": [45, 80, 174, 40, 68, 15, 9, 57, 48, 171, 77, 162], "baojie": [127, 143, 252, 228, 68, 214, 112, 115, 210, 233, 225, 322], "qita": [192, 222, 350, 314, 186, 295, 290, 290, 283, 353, 280, 365], "yuefen": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] } }, "zdevice":{"sum": 200, "onLine": 79, "offLine": 20, "menjin": {"sum": 50, "onLine": 15, "offLine": 3 }, "shuibiao":{"sum": 50, "onLine": 15, "offLine": 3 }, "dianbiao": {"sum": 50, "onLine": 15, "offLine": 3, }, "benyuenenghao": {"dian":1000, "shui":1000, "reshui":1000 }, "energyDay": {"shui": [329, 96, 51, 36, 163, 158, 52, 173, 203, 90, 63, 249, 196, 104, 172, 156, 147, 165, 146, 263, 31, 149, 219, 81, 249, 203, 246, 52, 172, 68, 215], "dian": [14, 10, 16, 16, 11, 14, 14, 18, 9, 17, 1, 18, 16, 12, 4, 3, 8, 3, 6, 15, 0, 17, 17, 2, 7, 3, 6, 7, 12, 10, 18], "day": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] }, "energyYear": {"shui": [1178, 214, 1029, 799, 1074, 840, 788, 358, 561, 959, 1179, 600], "dian": [16, 4, 17, 14, 3, 10, 15, 13, 10, 8, 1, 11], "day": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] } }, "zincome": {"total": 45000, "income": {"fangjian":{ "price":358000, "rate": 36 } , "tingchechang": {"price":100000, "rate": 14 }, "wuye": {"price":35000, "rate": 5}, "nenhao": {"price":258000, "rate": 36 }, "huiyishi": {"price":65000, "rate": 9 } }, "data": {"shouru": [930, 421, 830, 346, 841, 289, 742, 806, 289, 2, 877, 903], "zhichu": [1, 196, 139, 204, 304, 314, 480, 499, 9, 73, 135, 88], "day": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] } }, "clientdata": {"data": {"ruzhushu": {"num": "123", "last": "110"}, "fangke": {"num": "62", "last": "110"}, "enterOrg": {"num": "56", "last": "72"}, "enterPerson": {"num": "56", "last": "72"} } }, "crewcase": {"number": "400", "data": {"data": [150, 105, 204, 125, 190, 122, 208, 160, 210, 120, 190, 150, 120, 190, 150, 200], "day": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31] } }, "meetingroomdata": {"number": "20", "frequency": "6", "leisure": "3", "data":{"data":[150, 105, 204, 125, 190, 122, 208, 160, 210, 120, 190, 150, 120, 190, 150, 200], "day":[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31] } }, "servequalitydata": {"num": "5.5", "last": "4.0", "data":[4,4,4] } };

        this.setStoreAjaxData(data);

        this.$refs.roomrent.zinit();
        this.$refs.yearroomrent.zinit();
        this.$refs.monthroomrent.zinit();
        this.$refs.workorder.zinit();
        this.$refs.zdevice.zinit();
        this.$refs.zincome.zinit();
        this.$refs.clientdata.zinit();
        this.$refs.crewcase.zinit();
        this.$refs.meetingroomdata.zinit();
        this.$refs.servequalitydata.zinit();

        this.showLoading = false;
      }
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

/** 「載入中」動畫 **/
#circle {
  background-color: rgba(0,0,0,0);
  border:5px solid rgba(10,10,10,0.9);
  opacity:.9;
  border-right:5px solid rgba(0,0,0,0);
  border-left:5px solid rgba(0,0,0,0);
  border-radius:150px;
  box-shadow: 0 0 35px #808080;
  z-index:1000;
  width:150px;
  height:150px;
  margin:0 auto;       
  position:fixed;
  left:30px;
  bottom:30px;
  -moz-animation:spinPulse 1s infinite ease-in-out;
  -webkit-animation:spinPulse 1s infinite ease-in-out;
  -o-animation:spinPulse 1s infinite ease-in-out;
  -ms-animation:spinPulse 1s infinite ease-in-out;
}
#circle1 {
  background-color: rgba(0,0,0,0);
  border:5px solid rgba(20,20,20,0.9);
  opacity:.9;
  border-left:5px solid rgba(0,0,0,0);
  border-right:5px solid rgba(0,0,0,0);
  border-radius:130px;
  box-shadow: 0 0 15px #202020; 
  z-index:1000;
  width:100px;
  height:100px;
  margin:0 auto;
  position:fixed;
  left:55px;
  bottom:55px;
  -moz-animation:spinoffPulse 1s infinite linear;
  -webkit-animation:spinoffPulse 1s infinite linear;
  -o-animation:spinoffPulse 1s infinite linear;
  -ms-animation:spinoffPulse 1s infinite linear;
}
@-webkit-keyframes spinPulse {
  0% { -webkit-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; }
  50% { -webkit-transform:rotate(145deg); opacity:1;}
  100% { -webkit-transform:rotate(-320deg); opacity:0; }
}
@-webkit-keyframes spinoffPulse {
  0% { -webkit-transform:rotate(0deg); }
  100% { -webkit-transform:rotate(360deg); }
}
.circleWrap {
  position: absolute;
  left: 0;
  right: 0;
  width: 3450px;
  height: 1940px;
  background: rgba(255, 255, 255, 0.7);
}
</style>
