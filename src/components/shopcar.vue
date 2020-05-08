<template>
  <div id="#app">
    <el-table
      ref="multipleTable"
      :data="shopcar"
      border
      height="90%"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="商品种类" width="160"></el-table-column>
      <el-table-column prop="price" label="价格" width="160"></el-table-column>
      <el-table-column prop="count" label="总数" width="160"></el-table-column>
      <el-table-column prop="countmount" label="剩余数量" width="160"></el-table-column>
      <el-table-column prop label="购买数量" width="400">
        <template slot-scope="scope">
          <el-button
            @click="minus(scope.$index, scope.row)"
            icon="el-icon-minus"
            :disabled="scope.row.buy === 0 ? true  : false"
          ></el-button>
          <el-input v-model="scope.row.buy" placeholder="请输入内容"></el-input>
          <el-button @click="plus(scope.$index, scope.row)" icon="el-icon-plus"></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="purprice" label="出售总金额" width="160"></el-table-column>
      <el-table-column label="操作" width="240" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delshop(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" @click="moveup(scope.$index, shopcar)">上移</el-button>
          <el-button size="mini" @click="movedown(scope.$index, shopcar)">下移</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="all">
      <span>合计总价： {{ totalprice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcar",
  data() {
    return {
      shopcar: [
        {
          name: "洗衣机",
          price: 3000,
          countmount: 300,
          count: 300,
          buy: 0,
          purprice: 0
        },
        {
          name: "电冰箱",
          price: 2000,
          countmount: 200,
          count: 300,
          buy: 0,
          purprice: 0
        },
        {
          name: "微波炉",
          price: 800,
          countmount: 180,
          count: 300,
          buy: 0,
          purprice: 0
        },
        {
          name: "空调",
          price: 3200,
          countmount: 150,
          count: 300,
          buy: 0,
          purprice: 0
        },
        {
          name: "热水器",
          price: 1200,
          countmount: 290,
          count: 300,
          buy: 0,
          purprice: 0
        },
        {
          name: "吸油烟机",
          price: 2200,
          countmount: 50,
          count: 300,
          buy: 0,
          purprice: 0
        }
      ],
      color: "",
      totalprice: 0,
      inputval: "",
      disabled: Boolean
    };
  },
  created() {
    localStorage.setItem("car", JSON.stringify(this.shopcar));
    if (localStorage.getItem("shopcar") !== null) {
      const shopcars = JSON.parse(localStorage.getItem("shopcar"));
      this.shopcar = shopcars;
    }
  },
  methods: {
    //购买数量改变剩余数量以及出售总金额
    minus(index, row) {
      this.shopcar[index].buy--;
      this.sumResult(index, row, this.shopcar[index].buy);
      this.handleSelectionChange(index, row, this.shopcar[index].buy, 0);
    },
    plus(index, row) {
      this.shopcar[index].buy++;
      this.sumResult(index, row, this.shopcar[index].buy);
      this.handleSelectionChange(index, row, this.shopcar[index].buy, 1);
    },
    sumResult(index, row, value) {
      let cars = JSON.parse(localStorage.getItem("car"));
      const totalamount = value * this.shopcar[index].price;
      const countmount = cars[index].countmount - value;
      const totalprice = this.$set(
        this.shopcar[index],
        "purprice",
        totalamount
      );
      this.$set(this.shopcar[index], "countmount", countmount);
      localStorage.setItem("shopcar", JSON.stringify(this.shopcar));
    },
    //编辑
    handleEdit(index, row) {
      this.$message({
        type: "info",
        message: `暂无编辑功能`
      });
    },
    //删除商品
    delshop(index, row) {
      this.shopcar.splice(index, 1);
      localStorage.setItem("shopcar", JSON.stringify(this.shopcar));
    },
    //上移
    moveup(index, row) {
      let that = this;
      if (index > 0) {
        let updata = that.shopcar[index - 1];
        that.shopcar.splice(index - 1, 1);
        that.shopcar.splice(index, 0, updata);
        localStorage.setItem("shopcar", JSON.stringify(that.shopcar));
      } else {
        this.$message({
          type: "info",
          message: `已是第一条,无法上移`
        });
      }
    },
    //下移
    movedown(index, row) {
      let that = this;
      if (index + 1 === that.shopcar.length) {
        this.$message({
          type: "info",
          message: "已是最后一条，无法下移"
        });
      } else {
        let downdata = that.shopcar[index + 1];
        that.shopcar.splice(index + 1, 1);
        that.shopcar.splice(index, 0, downdata);
        localStorage.setItem("shopcar", JSON.stringify(that.shopcar));
      }
    },
    //购物合计总价
    handleSelectionChange(index, row, amount, stateVal) {
      if (typeof index === "object") {
        if (index.length) {
          this.totalprice = 0;
          for (let i = 0; i < index.length; i++) {
            this.totalprice += index[i].purprice;
          }
        } else {
          this.totalprice = 0;
        }
      } else {
        if (stateVal === 0) {
          this.totalprice -= row.price;
        } else {
          this.totalprice += row.price;
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/shopcar.scss";
</style>