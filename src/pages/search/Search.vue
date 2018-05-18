<template>
    <div class="container">
      <common-header :currentIndex="currentIndex"></common-header>
    </div>
</template>
<script>
import CommonHeader from '@/common/Header'
// import axios from 'axios'
export default {
  name: 'Search',
  components: {
    CommonHeader
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
