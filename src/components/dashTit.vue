<template>
  <div class="J_title">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'dashTit',
  data () {
    return {
      msg: '优糖星创园监控中心'
    }
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.J_title {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
}
</style>
