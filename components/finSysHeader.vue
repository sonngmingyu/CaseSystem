<template>
  <div class="com-title">
    <el-row>
      <el-col :span="7">
        <h2 class="title fl">{{headerTitle}}</h2>
        <span v-if="buttonShow">
          <el-button @click="goBack()" style="margin-left: 10px;">返回</el-button>
        </span>
        <slot name="button">

        </slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String
    },
    buttonShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    /* 注册组件 */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fl {
  float: left;
}
.com-title {
    color: #333333;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #dfe6ec;
    margin-bottom: 10px;
    .title {
      border-bottom: 3px solid #108ee9;
      font-size: 16px;
      line-height: 46px;
      height: 46px;
      font-weight: normal;
      padding: 0 20px;
    }
    .agency-com {
      margin-left: 15px;
    }
  }
</style>