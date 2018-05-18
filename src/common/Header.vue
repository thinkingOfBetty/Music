<template>
    <div class="content">
        <div class="header-top">
            <div class="header-sign">
                <span class="iconfont">&#xe700;</span>
                 New Romantic
            </div>
            <div class="header-list">
                <span class="iconfont" >&#xe619;</span>
            </div>
        </div>
        <ul class="header-list">
            <router-link :to='item.link' tag="li" v-for="(item,index) of list" :key="index" :class="{ item:hasItem,active: index === currentIndex}"
             >
              <span>{{item.name}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      hasItem: true,
      list: [{
        'name': '推荐',
        'link': '/'
      }, {
        'name': '歌手',
        'link': '/singer'
      }, {
        'name': '排行',
        'link': '/ranking'
      }, {
        'name': '搜索',
        'link': '/search'
      }]
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
 .header-top
  display flex
  height .75rem
  line-height .75rem
  text-align center
  color $color
  font-size .44rem
  .header-sign
   flex:1
   font-style: italic
   text-shadow: 1px 1px 1px rgba(0,0,0,.2)
   .iconfont
    font-size .6rem
  .header-list
   margin-right .2rem
   .iconfont
    font-size .6rem
 .header-list
  display flex
  .item
   flex .25rem
   color:#333
   text-align center
   margin .2rem .5rem
   font-size .35rem
  .active
   color:$color
   border-bottom 2px solid $color
  </style>
