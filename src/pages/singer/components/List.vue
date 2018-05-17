<template>
  <div class="container" ref="wrapper">
      <div>
        <div v-for="(item,key) of list" :key="key">
            <h2>{{key}}</h2>
            <ul class="list">
                <li class="item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'SingerList',
  props: {
    list: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.container
 overflow hidden
 height 8rem
 .list
  padding .3rem 0
  overflow hidden
  .item
   width 25%
   height .9rem
   line-height .9rem
   text-align center
   float left
   font-size .28rem
</style>
