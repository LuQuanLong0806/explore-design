<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!--   <ex-demo></ex-demo>
   <ex-card
      imgSrc="https://img1.baidu.com/it/u=407852637,3650486136&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1673802000&t=4cd7a3ca8cbec1c7a9f39469b37efc81"
      v-drag
    >
      <div class="summary">手把手教你搭建前端组件库,化身前端高手!</div>
      <template v-slot:footer>
        <div class="footer">
          <div class="footer-left">搭建组件库全流程</div>
          <div class="footer-right">￥582</div>
        </div>
      </template>
    </ex-card>
    <button @click="showImg = true">预览图片</button>
    <image-preview
      v-model="showImg"
      :img-list="[
        'https://img1.baidu.com/it/u=407852637,3650486136&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1673802000&t=4cd7a3ca8cbec1c7a9f39469b37efc81',
      ]"
    ></image-preview> -->
    <div class="drag" v-drag></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showImg: false,
    };
  },
  methods: {
    test() {
      console.log("showImg");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drag {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
.summary {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}
.footer {
  padding: 0 8px;
  &-left {
    float: left;
    font-size: 14px;
    color: #333;
  }

  &-right {
    float: right;
    font-size: 14px;
    color: red;
    font-weight: 600;
  }
}
</style>
