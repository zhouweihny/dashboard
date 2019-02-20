<template>
  <div class="page1">
    <h1>page1</h1>
    <p>{{msg}}</p>
    <p>{{msg2}}</p>
    <p>{{zutil.utilName.tit}}</p>
    <p>当前日期：{{ dateTime | time('YYYY-MM-DD')}}</p>
    <p>当前时间：{{ dateTime | time('HH:mm:ss')}}</p>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'page1',
      msg2: '',
      dateTime: ''
    }
  },
  mounted () {
    var _store = this.$store;
    this.msg = _store.getters.main_gettit;
    this.msg2 = _store.getters.page1_gettit;

    // 公用方法里的调用
    this.zutil.utilAlert();

    this.getTime();
    setInterval( ()=>{
      this.getTime();
    }, 1000)
  },
  methods: {
    getTime: function () {
      //获取当前时间戳
      this.dateTime  = Date.parse(new Date());
    }
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
