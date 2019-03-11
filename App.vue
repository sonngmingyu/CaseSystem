<template>
  <div id="corpus" class="todo-wrap">
		<router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'corpus',
    data () {
      return {
      }
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created () {
    },
    components: {
      /* 注册组件 */
    }
  }
</script>
<style lang="scss" scoped>
  *{margin: 0;padding: 0;box-sizing: border-box;}
  .container {
    width: 100%;
    min-width: 1260px;
    border-left: 179px solid #0070cf;
    padding: 10px 20px 20px 20px;
    background-color: #e8ebf1;
    box-sizing: border-box;
  }
</style>
