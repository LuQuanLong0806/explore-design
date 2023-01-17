<template>
  <div class="image-preview" v-if="value">
    <div class="image-preview-inner">
      <div class="imgcontain" v-drag ref="img">
        <img
          :src="src"
          v-if="imgList.length"
          alt=""
          :style="{
            transform: `scale(${scaleIndex}) rotate(${90 * rotateIndex}deg)`,
          }"
          :class="{ fullScreenStyle: fullScreen }"
        />
      </div>
      <ul class="image-pools">
        <li class="iconfont icon-fangda" @click="changeScale(0.25)">放大</li>
        <li class="iconfont icon-suoxiao" @click="changeScale(-0.25)">缩小</li>
        <li class="iconfont icon-rotate-left" @click="rotateIndex -= 1">
          左旋转
        </li>
        <li class="iconfont icon-rotate-right" @click="rotateIndex += 1">
          右旋转
        </li>
        <!-- 全屏 -->
        <!-- <li
          class="iconfont icon-quanping1"
          @click="
            fullScreen = !fullScreen;
            scaleIndex = 1;
          "
        >
          全屏
        </li> -->
      </ul>
      <!-- 上一张 下一张 -->
      <div
        class="image-preview-arrow left-arrow"
        @click="initImage('left')"
        v-if="imgList.length > 1"
      ></div>
      <div
        class="image-preview-arrow right-arrow"
        @click="initImage('right')"
        v-if="imgList.length > 1"
      ></div>
      <div class="closebtn" @click="closeFn">X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "image-preview",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    imgList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scaleIndex: 1,
      rotateIndex: 0,
      fullScreen: true,
      imgX: 0,
      imgY: 0,
      imgXY: {
        x: 0,
        y: 0,
      },
      imgIndex: 0,
    };
  },
  directives: {
    drag: {
      inserted(el, binding, vnode) {
        let o = vnode.context.imgXY;
        let c = vnode.context;
        // console.log("el", el, binding, vnode);
        el.onmousedown = (e) => {
          e.stopPropagation();
          e.preventDefault();
          o.x = e.x;
          o.y = e.y;
          el.onmousemove = (e) => {
            let x2 = e.x;
            let y2 = e.y;
            // 获取移动距离
            let x = x2 - o.x; // +-
            let y = y2 - o.y;

            c.imgX += x;
            c.imgY += y;

            // 讲当前位置保存方便下次移动进行比较
            o.x = x2;
            o.y = y2;

            el.style.transform =
              "translate(" + c.imgX + "px" + "," + c.imgY + "px" + ")";
          };
        };
        el.onmouseup = () => {
          el.onmousemove = null;
        };
      },
    },
  },
  methods: {
    // 放大和缩小
    changeScale(val) {
      if (this.scaleIndex + val <= 0) return;
      else this.scaleIndex += val;
    },
    openFn() {
      this.$emit("input", true);
    },
    closeFn() {
      Object.assign(this.$data, this.$options.data());
      this.$emit("input", false);
    },
    initImage(flag) {
      this.scaleIndex = 1;
      this.rotateIndex = 0;
      // this.$refs.img.style.transform = "translate(0, 0)";
      this.$refs.img.style.transform = "";
      if (flag === "left") {
        this.imgIndex === 0
          ? (this.imgIndex = this.imgList.length - 1)
          : this.imgIndex--;
      } else {
        this.imgIndex < this.imgList.length - 1
          ? this.imgIndex++
          : (this.imgIndex = 0);
      }
    },
  },
  mounted() {},
  watch: {
    index: {
      handler(n) {
        this.imgIndex = n;
      },
    },
  },
  computed: {
    src() {
      return this.imgList[this.imgIndex];
    },
  },
};
</script>
