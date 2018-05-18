<template>
    <div class="container">
      <common-header :currentIndex="currentIndex"></common-header>
      <search-header></search-header>
    </div>
</template>
<script>
import CommonHeader from '@/common/Header'
import SearchHeader from './components/Header'
// import axios from 'axios'
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
      currentIndex: 3
    }
  }
}
</script>
  <style lang="stylus" scoped>
  </style>
