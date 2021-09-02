<template>
  <div class="advert">
      <!-- 左侧 -->
      <AdverTree class="adver-left" @getTreeData="getTreeData" />
      <!-- 右侧 -->
      <AdvertContent class="adver-content" :treeData="treeData" />
  </div>
</template>

<script>
import AdverTree from './AdverTree.vue'
import AdvertContent from './AdvertContent.vue'
export default {
  components:{
    AdverTree,
    AdvertContent
  },
  data(){
    return{
      treeData:{name:"按钮"}
    }
  },
  methods:{
    getTreeData(val){
      console.log('......',val);
      this.treeData = val
    }
  },
}
</script>

<style lang="scss" scoped>
.adver-left{
  width: 300px;
  float: left;
}
.adver-content{
  float: left;
}
</style>