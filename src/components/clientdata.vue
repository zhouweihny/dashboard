<template>
	<div class="cwrap">
		<div class="left">
			<span class="ztips">上月同期</span>
			<ul>
        <li class="zui-flex">
          <div class="tit">
            入住企业数量
          </div>
          <div class="statistics">
          	<div class="num">
	            123
	          </div>
	          <div class="lastNum">
	            <span>110</span>
	            <i class="arrow up"></i>
	          </div>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月新增入驻企业数量
          </div>
          <div class="statistics">
          	<div class="num">
		          56
		        </div>
	          <div class="lastNum">
	            <span>72</span>
	            <i class="arrow down"></i>
	          </div>
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
          <div class="statistics">
          	<div class="num">
	            62
	          </div>
	          <div class="lastNum">
	            <span>110</span>
	            <i class="arrow up"></i>
	          </div>
          </div>
        </li>
        <li class="zui-flex">
          <div class="tit">
            本月新增入驻人数
          </div>
          <div class="statistics">
          	<div class="num">
	            56
	          </div>
	          <div class="lastNum">
	            <span>72</span>
	            <i class="arrow down"></i>
	          </div>
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
    ...mapState(['storecolor'])
  },
  data() {
    return {
      msg: 'roomrent',
      name: '房间租赁数据',
      legendArr: [],
      color: [],
      myChart: {},
    }
  },
  mounted() {
  	
  },
  methods: {
    zinit() {

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
      .tit{
      	flex:2;
      }
      .statistics{
      	flex: 1;
		    display: flex;
		    justify-content: space-between;
		    align-items: flex-end;
      }

      .num {
        color: #5BEAFB;
        font-size: 26px;
      }

      .lastNum {}
    }
  }  

	.left{
		width: 350px;
		box-sizing: border-box;
    padding-top: 30px;
    position: relative;
	}

	.right{
		width: 350px;
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