<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <ex-demo></ex-demo> -->
    <ex-card
      imgSrc="https://img1.baidu.com/it/u=407852637,3650486136&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1673802000&t=4cd7a3ca8cbec1c7a9f39469b37efc81"
    >
      <div class="summary">手把手教你搭建前端组件库,化身前端高手!</div>
      <template v-slot:footer>
        <div class="footer">
          <div class="footer-left">搭建组件库全流程</div>
          <div class="footer-right">￥582</div>
        </div>
      </template>
    </ex-card>

    <image-preview
      v-model="showImg"
      :img-list="[
        'https://img1.baidu.com/it/u=407852637,3650486136&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1673802000&t=4cd7a3ca8cbec1c7a9f39469b37efc81',
      ]"
    ></image-preview>
    <read-excel @on-result="getResult"></read-excel>
    <div class="drag" v-drag>拖动他试试</div>
    <button @click="showImg = true">预览图片</button>
    <br />
    <button @click="test">JSON导出表格</button>
    <button @click="openPop">打开弹窗</button>

    <!-- <iframe src="http://172.16.2.252:8090/#/" frameborder="0"></iframe> -->
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
  components: {},
  data() {
    return {
      showImg: false,
      tHeader: [
        "供应商名称",
        "供应商所属城市",
        "是否关联企业",
        "采购的主要产品",
        "2022年下半年采购金额（万元）",
        "2021年下半年采购金额（万元）",
      ],
      filterVal: [
        "supplierName",
        "city",
        "affiliatedEnterprises",
        "mainProducts",
        "currentAmount",
        "lastAmount",
      ],
    };
  },
  methods: {
    // JSON data 导出excel
    test() {
      let data = [
        {
          supplierName: "supplierName",
          city: "city",
          affiliatedEnterprises: "affiliatedEnterprises",
          mainProducts: "mainProducts",
          currentAmount: "currentAmount",
          lastAmount: "lastAmount",
        },
      ];
      this.$exportJsonToExcel(this.tHeader, this.filterVal, data);
    },
    // 打开POP
    openPop() {
      this.$pop("hi~");
    },
    // 递归拼接
    digui() {
      let arr1 = ["1", "1-1", "1-1-1"];
      let label = "";
      let list = [
        {
          name: "我是1",
          value: "1",
          children: [
            {
              name: "我是1-1",
              value: "1-1",
              children: [
                {
                  name: "我是1-1-1",
                  value: "1-1-1",
                  children: [],
                },
              ],
            },
          ],
        },
      ];
      let templateData = JSON.parse(JSON.stringify(list));

      let aa = (value, data) => {
        data.forEach((d) => {
          if (value === d.value) {
            if (d.children && d.children.length) templateData = d.children;
            label ? (label += " / " + d.name) : (label += d.name);
            return;
          }
        });
      };
      arr1.forEach((d) => {
        aa(d, templateData);
      });

      console.log("label~~~", label);
    },
    // 
    getResult(data) {
      let keys = Object.keys(data[0]);
      this.$exportJsonToExcel(keys, keys, data)
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.digui();
    // }, 5000);
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
