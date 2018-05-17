<template>
  <div class="container">
    <common-header :currentIndex="currentIndex"></common-header>
     <singer-search></singer-search>
     <singer-alphabet></singer-alphabet>
  </div>
</template>
<script>
import CommonHeader from '@/common/Header'
import SingerSearch from './components/Search'
import SingerAlphabet from './components/Alphabet'
export default {
  name: 'Singer',
  data () {
    return {
      currentIndex: 1
    }
  },
  components: {
    CommonHeader,
    SingerSearch,
    SingerAlphabet
  }
}
</script>
    <style lang="stylus" scoped>
</style>
