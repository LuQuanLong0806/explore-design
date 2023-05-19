<template>
  <div
    class="ex-pop-tips animation"
    v-show="isShow"
    ref="Pop"
    :class="{ shake: type == 'shake' }"
  >
    <div class="ex-pop-content">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "ex-pop",
  props: {
    msg: {
      type: String,
      default: "没有任何消息!",
    },
    type: {
      type: String,
      default: "shake",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
        // this.type = "";
      }, 3000);
    },
  },
  watch: {
    isShow(newVal, oldVal) {
      if (newVal != oldVal && newVal) {
        //
        setTimeout(() => {
          let Pop = this.$refs.Pop;
          let height = Pop.clientHeight;
          let width = Pop.clientWidth;
          Pop.style.marginLeft = -width / 2 + "px";
          Pop.style.marginTop = -height / 2 + "px";
          // 关闭
          this.close();
        });
      }
    },
  },
};
</script>