<template>
  <div class="container">
    <home-header :list="switches" @switch="handleItemClick" :currentIndex="currentIndex"></home-header>
    <home-swiper :list="swiper"></home-swiper>
    <home-recommend :list="recommend"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend
  },
  data () {
    return {
      switches: [],
      swiper: [],
      recommend: [],
      currentIndex: 0
    }
  },
  methods: {
    handleItemClick (index) {
      this.currentIndex = index
    },
    getHomeInfo () {
      axios.get('api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.switches = data.switches
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
