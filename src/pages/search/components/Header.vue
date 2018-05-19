<template>
  <div class="container">
    <form action="" @submit="handleSearchHistory">
      <input type="text" class="search-input" placeholder="搜索歌曲、歌手" v-model="keyword">
    </form>
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
let arr = JSON.parse(localStorage.getItem('historyList')) || null
export default {
  name: 'SearchHeader',
  data () {
    return {
      keyword: '',
      historyList: arr || []
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleHotItemClick (e) {
      this.keyword = e.target.innerHTML
      // e.target.focus(),为什么这样设置会失效
      document.querySelector('input').focus()
    },
    handleDeleteClick (index) {
      this.historyList.splice(index, 1)
      localStorage.setItem('historyList', JSON.stringify(this.historyList))
    },
    handleSearchHistory () {
      this.historyList.push(this.keyword)
      localStorage.setItem('historyList', JSON.stringify(this.historyList))
    }
  },
  watch: {
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
