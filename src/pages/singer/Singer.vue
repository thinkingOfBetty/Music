<template>
  <div class="container">
    <common-header :currentIndex="currentIndex"></common-header>
     <singer-search :list="hotList"></singer-search>
     <singer-alphabet :list="characterList" @change="handleCharacterChange"></singer-alphabet>
     <singer-list :list="singerList" :letter="letter"></singer-list>
  </div>
</template>
<script>
import CommonHeader from '@/common/Header'
import SingerSearch from './components/Search'
import SingerAlphabet from './components/Alphabet'
import SingerList from './components/List'
import axios from 'axios'
export default {
  name: 'Singer',
  data () {
    return {
      currentIndex: 1,
      characterList: [],
      hotList: [],
      singerList: {},
      letter: ''
    }
  },
  components: {
    CommonHeader,
    SingerSearch,
    SingerAlphabet,
    SingerList
  },
  methods: {
    getSingerInfo () {
      axios.get('api/singer.json')
        .then(this.getSingerInfoSucc)
    },
    getSingerInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.singerList = data.singerList
        this.characterList = data.characterList
        this.hotList = data.hotList
      }
    },
    handleCharacterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getSingerInfo()
  }
}
</script>
    <style lang="stylus" scoped>
</style>
