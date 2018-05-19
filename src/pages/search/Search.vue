<template>
    <div class="container">
      <common-header :currentIndex="currentIndex"></common-header>
      <search-header :list="hotSingersList"></search-header>
    </div>
</template>
<script>
import CommonHeader from '@/common/Header'
import SearchHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchHeader
  },
  data () {
    return {
      swiper: [],
      recommend: [],
      currentIndex: 3,
      hotSingersList: []
    }
  },
  methods: {
    getSingerInfo () {
      axios.get('api/search.json')
        .then(this.getSingerInfoSucc)
    },
    getSingerInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotSingersList = data.hotSingersList
      }
    }
  },
  mounted () {
    this.getSingerInfo()
  }
}
</script>
  <style lang="stylus" scoped>
  </style>
