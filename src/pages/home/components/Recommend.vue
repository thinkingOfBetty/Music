<template>
  <div class="wrap" ref="wrapper">
      <div class="content" >
          <div class="recommend">热门歌单推荐</div>
          <ul class="list" >
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
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrap
 overflow:hidden
 height 9rem
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
