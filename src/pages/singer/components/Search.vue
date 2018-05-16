<template>
  <div class="container">
    <h2>热门歌手</h2>
    <ul class="hot-singer">
      <li class="item" v-for="item of list" :key="item.id">
        <img :src="item.imgUrl"  class="item-img">
        <span class="item-name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SingerSearch',
  data () {
    return {
      list: [{
        id: '01',
        name: '周杰伦',
        imgUrl: 'http://p1.music.126.net/o-FjCrUlhyFC96xiVvJZ8g==/109951163111191410.jpg?param=130y130'
      }, {
        id: '02',
        name: '林俊杰',
        imgUrl: 'http://p1.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130'
      }, {
        id: '03',
        name: '邓紫棋',
        imgUrl: 'http://p1.music.126.net/r7uMnwjWpYMuQI_3ZTg56A==/18528969953189760.jpg?param=130y130'
      }, {
        id: '04',
        name: '陈奕迅',
        imgUrl: 'http://p1.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg?param=130y130'
      }, {
        id: '05',
        name: '张学友',
        imgUrl: 'http://p1.music.126.net/1JG8Uwzb5XAJXaPUHR6RBw==/3238061747024716.jpg?param=130y130'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.item
 display flex
 padding .1rem .1rem
 .item-img
  width 1.4rem
  height 1.4rem
 .item-name
  flex 1
  padding .5rem .2rem
  font-size .4rem

</style>
