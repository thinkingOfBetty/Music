<template>
  <div class="container">
    <common-header :currentIndex="currentIndex"></common-header>
    <home-swiper :list="swiper"></home-swiper>
    <home-recommend :list="recommend"></home-recommend>
  </div>
</template>

<script>
import CommonHeader from '@/common/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    HomeSwiper,
    HomeRecommend
  },
  data () {
    return {
      swiper: [],
      recommend: [],
      currentIndex: 0
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiper = data.swiper
        this.recommend = data.recommend
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
