<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of list" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.src" class="banner-img">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      },
      list: [{
        id: '01',
        src: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/276286.jpg'
      }, {
        id: '02',
        src: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/277327.jpg'
      }, {
        id: '03',
        src: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/275329.jpg'
      }, {
        id: '04',
        src: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/276345.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
 background #fff
.wrapper
 .img-wrapper
  overflow hidden
  height 0
  padding-bottom 40%
  .banner-img
   width 100%
</style>
