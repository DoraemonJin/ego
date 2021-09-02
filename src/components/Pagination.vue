<template>
  <div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :page-size="pageSize"
      :total="total"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    changePage(val){
      // console.log(val);
      // 子传父
      this.$emit('changeCurent',val)
    }
  },
};
</script>

<style>
</style>