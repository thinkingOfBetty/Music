<template>
  <div >
      <h2>字母排序</h2>
      <ul class="character-list">
          <li class="item"
           v-for="(item,index) of list"
           :key="index"
           @click="handleCharacterClick"
           >{{item}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'SingerAlphabet',
  props: {
    list: Array
  },
  data () {
    return {
      letter: ''
    }
  },
  methods: {
    handleCharacterClick (e) {
      this.letter = e.target.innerHTML
      this.$emit('change', this.letter)
    }
  }
}
</script>
<style lang="stylus" scoped>
.character-list
 padding .3rem 0
 overflow hidden
 .item
  width 16.6%
  height .9rem
  line-height .9rem
  text-align center
  float left
  font-size .28rem

</style>
