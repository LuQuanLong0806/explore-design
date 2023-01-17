<template>
  <div class="m-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="m-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="m-card-summary">{{ summary }}</div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <!--  -->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "i-card",
  components: {},
  props: {
    width: {
      // 卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前 this 实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问 DOM 元素）
  mounted() {},
};
</script>
<style scoped>
</style>