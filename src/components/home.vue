<template>
  <div>
    <div class="mainpage" id="mainpage">
      <div class="zui-flex J_weather">
        <div>{{weathers.date}}</div>
        <div>{{weathers.temperature}}</div>
        <div>{{weathers.weather}}</div>
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

import axios from 'axios'
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
      showLoading: true,
      weathers: {
        date: '',
        temperature: '',
        weather: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setStoreAjaxData']),
    initPages () {
      this.showLoading = true;
      axios.all([
        axios.get('http://utowntest.utowntech.com:8091/statistics'),
        axios.get('http://utowntest.utowntech.com:8091/weather')
      ])
      .then(axios.spread((cs, fl)=> {
        // 上面两个请求都完成后，才执行这个回调方法
        
        // let data = eval("("+cs.data+")");
        let data = {"roomrent": {"rentOut": "180", "residue": "120", "contract": {"num": "123", "last": "110"}, "relet": {"num": "56", "last": "72"}, "throwalease": {"num": "56", "last": "12"}, "bangongshi": {"rentOut": "80", "residue": "20", "sum": "100"}, "yidonggongwei": {"rentOut": "50", "residue": "50", "sum": "100"}, "gudinggongwei": {"rentOut": "50", "residue": "50", "sum": "100"} }, "yearroomrent": {"qiandan": [192, 146, 41, 163, 182, 30, 4, 93, 41, 76, 169, 60], "xiuzhu": [316, 314, 239, 88, 139, 294, 260, 153, 181, 98, 232, 57], "tuizhu": [380, 558, 332, 328, 262, 208, 198, 368, 171, 298, 328, 377], "yuefen": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03"] }, "monthroomrent": {"qiandan": [192, 146, 41, 163, 182, 30, 4, 93, 41, 76, 169, 60], "xiuzhu": [316, 314, 239, 88, 139, 294, 260, 153, 181, 98, 232, 57], "tuizhu": [380, 558, 332, 328, 262, 208, 198, 368, 171, 298, 328, 377], "yuefen": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03"] }, "workorder": {"total": 496, "daichuli": 20, "data": {"weixiu": [45, 80, 174, 40, 68, 15, 9, 57, 48, 171, 77, 162], "baojie": [127, 143, 252, 228, 68, 214, 112, 115, 210, 233, 225, 322], "qita": [192, 222, 350, 314, 186, 295, 290, 290, 283, 353, 280, 365], "yuefen": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03"] } }, "zdevice": {"sum": 205, "onLine": 179, "offLine": 26, "menjin": {"sum": 160, "onLine": 159, "offLine": 1 }, "shuibiao": {"sum": 20, "onLine": 18, "offLine": 2 }, "dianbiao": {"sum": 25, "onLine": 25, "offLine": 0 }, "benyuenenghao": {"dian": 1000, "shui": 30, "reshui": 60 }, "energyDay": {"dian": [102, 96, 81, 136, 113, 138, 82, 113, 163, 90, 93, 129, 106, 104, 112, 136, 117, 135, 96, 103, 88, 149, 76, 81, 166, 103, 136, 102, 172, 168, 195], "shui": [14, 10, 16, 16, 11, 14, 14, 18, 9, 17, 10, 18, 16, 12, 18, 16, 10, 13, 16, 15, 11, 17, 17, 12, 15, 13, 16, 17, 12, 10, 18], "day": ["2019-01-31", "2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04", "2019-02-05", "2019-02-06", "2019-02-07", "2019-02-08", "2019-02-09", "2019-02-10", "2019-02-11", "2019-02-12", "2019-02-13", "2019-02-14", "2019-02-15", "2019-02-16", "2019-02-17", "2019-02-18", "2019-02-19", "2019-02-20", "2019-02-21", "2019-02-22", "2019-02-23", "2019-02-24", "2019-02-25", "2019-02-26", "2019-02-27", "2019-02-28", "2019-03-01"] }, "energyYear": {"dian": [1178, 214, 1029, 799, 1074, 840, 788, 358, 561, 959, 1179, 600], "shui": [101, 88, 90, 121, 130, 108, 115, 113, 109, 98, 91, 101], "day": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03"] } }, "zincome": {"total": 45000, "income": {"fangjian": {"price": 25000, "rate": 36 }, "tingchechang": {"price": 9000, "rate": 14 }, "wuye": {"price": 2000, "rate": 5 }, "nenhao": {"price": 1000, "rate": 36 }, "huiyishi": {"price": 8000, "rate": 9 } }, "data": {"shouru": [930, 421, 830, 346, 841, 289, 742, 806, 289, 2, 877, 903], "zhichu": [1, 196, 139, 204, 304, 314, 480, 499, 9, 73, 135, 88], "day": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03"] } }, "clientdata": {"data": {"ruzhushu": {"num": "123", "last": "110"}, "fangke": {"num": "62", "last": "110"}, "enterOrg": {"num": "56", "last": "72"}, "enterPerson": {"num": "56", "last": "72"} } }, "crewcase": {"number": "400", "data": {"data": [150, 105, 204, 125, 190, 122, 208, 160, 210, 120, 190, 150, 120, 190, 150, 200, 120, 190, 150, 120, 190, 150, 200, 120, 190, 150, 120, 190, 150, 200], "day": ["2019-01-31", "2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04", "2019-02-05", "2019-02-06", "2019-02-07", "2019-02-08", "2019-02-09", "2019-02-10", "2019-02-11", "2019-02-12", "2019-02-13", "2019-02-14", "2019-02-15", "2019-02-16", "2019-02-17", "2019-02-18", "2019-02-19", "2019-02-20", "2019-02-21", "2019-02-22", "2019-02-23", "2019-02-24", "2019-02-25", "2019-02-26", "2019-02-27", "2019-02-28", "2019-03-01"] } }, "meetingroomdata": {"number": "20", "frequency": "6", "leisure": "3", "data": {"data": [5, 3, 6, 8, 5, 9, 8, 10, 12, 9, 13, 6, 8, 4, 9, 2, 6, 5, 7, 4, 9, 11, 6, 7, 12, 15, 7, 5, 8, 6], "day": ["2019-01-31", "2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04", "2019-02-05", "2019-02-06", "2019-02-07", "2019-02-08", "2019-02-09", "2019-02-10", "2019-02-11", "2019-02-12", "2019-02-13", "2019-02-14", "2019-02-15", "2019-02-16", "2019-02-17", "2019-02-18", "2019-02-19", "2019-02-20", "2019-02-21", "2019-02-22", "2019-02-23", "2019-02-24", "2019-02-25", "2019-02-26", "2019-02-27", "2019-02-28", "2019-03-01"] } }, "servequalitydata": {"num": "4.5", "last": "4.0", "data": {"taidu": [20], "xiaolv": [30], "zhiliang": [40] } } };

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

        let weather = fl.data;
        this.weathers.date = this.moment(weather.date).format("YYYY-MM-DD");
        this.weathers.temperature = weather.results[0].weather_data[0].temperature;
        this.weathers.weather = weather.results[0].weather_data[0].weather;

        this.showLoading = false;
      }));
    }
  },
  mounted() {

    this.initPages();

    setInterval(()=>{
      // 30分钟刷新一次
      
      this.initPages();
      
    }, 1800000)
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
  width: 1920px;
  height: 1080px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background-size: cover;
}

.J_weather, .J_parkNum {
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  top: 2.5rem;
  justify-content: space-around;
  align-items: center;
  color: #5BE9FB;
  font-size: .9rem;
}
.J_weather {
  width: 14rem;
  left: 24rem;
}
.J_parkNum {
  width: 14rem;
  left: 58rem;
}

.J_main {
  position: relative;
  width: 100%;
  height: 100%;
  .item {
    position: absolute;

    &.J_roomrent {
      left: 2.5rem;
      top: 5rem;
      width: 22.5rem;
      height: 7rem;
    }
    &.J_yearroomrent {
      width: 21.5rem;
      height: 9.8rem;
      top: 12.55rem;
      left: 2.5rem;
    }
    &.J_monthroomrent {
      width: 21.5rem;
      height: 9.8rem;
      top: 24rem;
      left: 2.5rem;
    }
    &.J_workorder {
      width: 21.5rem;
      height: 9.8rem;
      top: 41.2rem;
      left: 2.5rem;
    }
    &.J_zdevice {
      left: 26.5rem;
      top: 7rem;
      width: 43rem;
      height: 24rem;
    }
    &.J_zincome {
      left: 26.5rem;
      top: 33rem;
      width: 43rem;
      height: 19rem;
    }
    &.J_clientdata{
      height: 6rem;
      top: 5rem;
      right: 2rem;
      width: 22rem;
    }
    &.J_crewcase{
      right: 2rem;
      top: 12rem;
      width: 22rem;
      height: 12rem;
    }
    &.J_meetingroomdata{
      right: 2rem;
      top: 28rem;
      width: 22rem;
      height: 12rem;
    }
    &.J_servequalitydata{
      right: 2rem;
      top: 44rem;
      width: 22rem;
      height: 8rem;
    }
  }
  .J_roomrent_tit {
    position: absolute;
    top: 2.5rem;
    left: 9.9rem;
    font-size: 1rem;
    color: $base_colo;
  }
  .J_yearroomrent_tit {
    position: absolute;
    top: 12.55rem;
    left: 9.25rem;
    font-size: .6rem;
    color: #fff;
  }

  .J_monthroomrent_tit {
    position: absolute;
    top: 24.2rem;
    left: 10.77rem;
    font-size: .6rem;
    color: #fff;
  }
  .J_workorder_tit {
    position: absolute;
    top: 41.45rem;
    left: 9.1rem;
    font-size: .6rem;
    color: #fff;
   }

  .J_clientdata_tit{
    position: absolute;
    top: 2.5rem;
    font-size: 1rem;
    right: 11rem;
    color: $base_colo;
  }
  .J_crewcase_tit{
    position: absolute;
    top: 9.8rem;
    font-size: 1rem;
    right: 10rem;
    color: $base_colo;
  }
  .J_meetingroomdata_tit{
    position: absolute;
    top: 25.2rem;
    font-size: 1rem;
    right: 10rem;
    color: $base_colo;
  }
  .J_servequalitydata_tit{
    position: absolute;
    top: 40.8rem;
    font-size: 1rem;
    right: 10rem;
    color: $base_colo;
  }
  .J_servequalitydata_tit2{
    position: absolute;
    top: 44.3rem;
    right: 10.6rem;
    font-size: .6rem;
    color: #fff;
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
