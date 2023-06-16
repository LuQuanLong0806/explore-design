<template>
  <div style="display: inline-block">
    <div style="display: inline-block" @click="clickInput">
      <input
        ref="uploadExcel"
        style="display: none"
        type="file"
        @change="uploadExcel"
        accept=".xlx,.xlsx"
      />
      <slot>
        <button>上传excel</button>
      </slot>
    </div>
  </div>
</template>

<script>
import { read, utils } from "xlsx/xlsx.mjs";
export default {
  name: "read-excel",
  components: {},
  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {
    clickInput() {
      this.$refs.uploadExcel.click();
    },
    uploadExcel(event) {
      if (!event.currentTarget.files.length) {
        return;
      }
      const that = this;
      // 拿取文件对象
      var f = event.currentTarget.files[0];
      // 用FileReader来读取
      var reader = new FileReader();
      // 重写FileReader上的readAsBinaryString方法
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = "";
        var wb; // 读取完成的数据
        var outdata; // 你需要的数据
        var reader = new FileReader();
        reader.onload = function () {
          // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          // 接下来就是xlsx了，具体可看api
          wb = read(binary, {
            type: "binary",
          });
          outdata = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
          // 自定义方法向父组件传递数据
          that.$emit("on-result", outdata);
        };
        reader.readAsArrayBuffer(f);
      };
      reader.readAsBinaryString(f);
    },
  },
  // 生命周期 - 创建完成（可以访问当前 this 实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问 DOM 元素）
  mounted() {},
};
</script>
<style scoped>
</style>