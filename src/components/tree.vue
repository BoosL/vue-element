<template>
  <div id="app">
    <div id="tree" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { apitree } from "@/api/api";
export default {
  name: "tree",
  data() {
    return {};
  },
  created() {},
  mounted() {
    let treecharts = echarts.init(document.getElementById("tree"));
    treecharts.showLoading();
    apitree({})
      .then(function(res) {
        treecharts.hideLoading();
        echarts.util.each(res.children, function(datum, index) {
          index % 2 === 0 && (datum.collapsed = true);
        });
        treecharts.setOption({
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove"
          },
          series: [
            {
              type: "tree",
              data: [res],
              top: "1%",
              left: "15%",
              bottom: "1%",
              right: "20%",
              symbolSize: 12,
              label: {
                normal: {
                  position: "left",
                  verticalAlign: "middle",
                  align: "right",
                  fontSize: 12
                }
              },
              leaves: {
                label: {
                  normal: {
                    position: "right",
                    verticalAlign: "middle",
                    align: "left"
                  }
                }
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#tree div {
  height: 100%;
}
</style>