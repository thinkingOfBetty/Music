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
  props: {
    list: Array
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
