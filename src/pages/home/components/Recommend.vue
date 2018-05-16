<template>
  <div class="content">
    <div class="recommend">热门歌单推荐</div>
    <ul class="list">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
            <img :src="item.src" class="item-img" >
        </div>
        <div class="item-msg">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [{
        id: '001',
        src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000D8EMD0SEfyH.jpg?max_age=2592000',
        title: '校园时光',
        desc: 'Wanna One：与你迎接黄金年代'
      }, {
        id: '002',
        src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Cb3K618yEV5.jpg?max_age=2592000',
        title: '生日快乐',
        desc: 'BIGBANG花路，“怕失去”是双方的事.'
      }, {
        id: '003',
        src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000005fbIk1ZzkRU.jpg?max_age=2592000',
        title: '陪伴',
        desc: 'The Beatles：走不完的艾比路'
      }, {
        id: '004',
        src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000459BEP32YDr9.jpg?max_age=2592000',
        title: '懒散',
        desc: '东京的雨淋湿巴黎'

      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
 .recommend
  height 1rem
  line-height 1rem
  text-align center
  color $color
  font-size .28rem
 .item
  display flex
  .item-img
   width 1.8rem
   padding .2rem
  .item-msg
   flex 1
   padding .2rem 0
   .item-title
    height .8rem
    line-height .8rem
    font-size .32rem
    color $color
   .item-desc
    height 1rem
    line-height 1rem
    color #888

</style>
