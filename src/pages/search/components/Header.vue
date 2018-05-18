<template>
  <div class="container">
      <input type="text" class="search-input" placeholder="搜索歌曲、歌手" v-model="keyword">
      <div class="hot-search">
          <h2>热门搜索</h2>
          <ul class="search-list">
              <li class="search-item"
               v-for="item of list"
               :key="item.is"
               @click="handleHotItemClick">{{item.name}}</li>
          </ul>
      </div>
      <div class="search-history">
        <h2>搜索历史<span class="iconfont icon">&#xe67c;</span></h2>
        <ul class="search-history">
          <li class="history-item" v-for ="(item,index) of historyList" :key="index" >
            <span> {{item}}</span>
            <span class="history-delete"
             @click="handleDeleteClick(index)">×</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      keyword: '',
      historyList: [],
      list: [{
        id: '01',
        name: '陈奕迅'
      }, {
        id: '02',
        name: '梦一场'
      }, {
        id: '03',
        name: '周杰伦'
      }, {
        id: '04',
        name: 'TaylerSwift'
      }, {
        id: '05',
        name: '张杰'
      }, {
        id: '06',
        name: '张惠妹'
      }, {
        id: '07',
        name: '邓紫棋'
      }, {
        id: '08',
        name: '李荣浩'
      }, {
        id: '09',
        name: '张靓颖'
      }, {
        id: '10',
        name: '凉凉'
      }, {
        id: '11',
        name: '凤凰传奇'
      }]
    }
  },
  methods: {
    handleHotItemClick (e) {
      this.keyword = e.target.innerHTML
      this.historyList.push(this.keyword)
    },
    handleDeleteClick (index) {
      this.historyList.splice(index, 1)
    }
  },
  watch: {
    historyList () {

    }
  }
}
</script>
<style lang="stylus" scoped>
.container
 .search-input
  width 80%
  margin .2rem .4rem
  border 1px solid #ccc
  height .62rem
  line-height .62rem
  padding 0 .2rem
  border-radius .1rem
 .search-list
  overflow hidden
  width 90%
  padding-top .2rem
  .search-item
   float left
   margin-left .2rem
   margin-bottom .2rem
   padding .2rem
   border 1px solid #ccc
   border-radius .1rem
 .search-history
  .icon
   font-size .44rem
   float right
   margin-top -.05rem
  .search-history
   padding .4rem
   .history-item
    height .68rem
    line-height .68rem
    .history-delete
     float right

</style>
