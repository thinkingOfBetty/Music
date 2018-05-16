<template>
  <div class="container">
    <common-header :currentIndex="currentIndex"></common-header>
     <singer-search></singer-search>
  </div>
</template>
<script>
import CommonHeader from '@/common/Header'
import SingerSearch from './components/Search'
export default {
  name: 'Singer',
  data () {
    return {
      currentIndex: 1
    }
  },
  components: {
    CommonHeader,
    SingerSearch
  }
}
</script>
    <style lang="stylus" scoped>
</style>
