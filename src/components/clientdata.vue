<template>
	<div class="cwrap">
		<div class="left">
			<span class="ztips">上月同期</span>
			<ul>
        <li class="zui-flex">
          <div class="tit">
            入住企业数量
          </div>
        	<div class="num">
            {{ruzhushu.num}}
          </div>
          <div class="lastNum">
            <span>{{ruzhushu.last}}</span>
            <i class="arrow " :class="ruzhushu.arrow"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月新增企业
          </div>
        	<div class="num">
	          {{enterOrg.num}}
	        </div>
          <div class="lastNum">
            <span>{{enterOrg.last}}</span>
            <i class="arrow " :class="enterOrg.arrow"></i>
          </div>
        </li>
      </ul>
		</div>
		<div class="right">
			<span class="ztips">上月同期</span>
			<ul>
        <li class="zui-flex">
          <div class="tit">
            访客人数
          </div>
        	<div class="num">
            {{fangke.num}}
          </div>
          <div class="lastNum">
            <span>{{fangke.last}}</span>
            <i class="arrow " :class="fangke.arrow"></i>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月新增访客
          </div>
        	<div class="num">
            {{enterPerson.num}}
          </div>
          <div class="lastNum">
            <span>{{enterPerson.last}}</span>
            <i class="arrow " :class="enterPerson.arrow"></i>
          </div>
        </li>
      </ul>
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

      ruzhushu: {},
      fangke: {},
      enterOrg: {},
      enterPerson: {},
      "clientdata": {
        "data": {
          "ruzhushu": {
            "num": "",
            "last": ""
          },
          "fangke": {
            "num": "",
            "last": ""
          },
          "enterOrg": {
            "num": "",
            "last": ""
          },
          "enterPerson": {
            "num": "",
            "last": ""
          }
        }
      },
    }
  },
  mounted() {
  	
  },
  methods: {
    zinit() {
      if(this.storeAjaxData && this.storeAjaxData.clientdata){
        this.clientdata = this.storeAjaxData.clientdata;

        this.ruzhushu = this.clientdata.data.ruzhushu;
        this.fangke = this.clientdata.data.fangke;
        this.enterOrg = this.clientdata.data.enterOrg;
        this.enterPerson = this.clientdata.data.enterPerson;

        this.ruzhushu.num = parseInt(this.ruzhushu.num, 10) || 0;
        this.ruzhushu.last = parseInt(this.ruzhushu.last, 10) || 0;
        this.fangke.num = parseInt(this.fangke.num, 10) || 0;
        this.fangke.last = parseInt(this.fangke.last, 10) || 0;
        this.enterOrg.num = parseInt(this.enterOrg.num, 10) || 0;
        this.enterOrg.last = parseInt(this.enterOrg.last, 10) || 0;
        this.enterPerson.num = parseInt(this.enterPerson.num, 10) || 0;
        this.enterPerson.last = parseInt(this.enterPerson.last, 10) || 0;

        if(this.ruzhushu.num > this.ruzhushu.last){
          this.ruzhushu.arrow = 'up'
        }else if(this.ruzhushu.num < this.ruzhushu.last){
          this.ruzhushu.arrow = 'down'
        }
        if(this.fangke.num > this.fangke.last){
          this.fangke.arrow = 'up'
        }else if(this.fangke.num < this.fangke.last){
          this.fangke.arrow = 'down'
        }
        if(this.enterOrg.num > this.enterOrg.last){
          this.enterOrg.arrow = 'up'
        }else if(this.enterOrg.num < this.enterOrg.last){
          this.enterOrg.arrow = 'down'
        }
        if(this.enterPerson.num > this.enterPerson.last){
          this.enterPerson.arrow = 'up'
        }else if(this.enterPerson.num < this.enterPerson.last){
          this.enterPerson.arrow = 'down'
        }
      }
    }
  }
}	
</script>

<style scoped lang="scss">
$base_colo: #7bb9dc;
.cwrap{
	display: flex;
	justify-content:space-between;
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
      padding-left: .7rem;
      height: 1.5rem;
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
      .tit {
        min-width: 3.8rem;
      }
      .statistics{
      	flex: 1;
		    display: flex;
		    justify-content: space-between;
		    align-items: flex-end;
      }
      .num {
        color: #5BEAFB;
        font-size: .9rem;
      }
    }
  }  
	.left{
		width: 46%;
		box-sizing: border-box;
    padding-top: 30px;
    position: relative;
	}
	.right{
		width: 46%;
		box-sizing: border-box;
    padding-top: 30px;
    position: relative;
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
}
</style>