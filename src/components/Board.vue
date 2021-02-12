<template>
  <div class="grid mx-5">
    <div
      class="board-row d-flex flex-nowrap flex-row"
      v-for="x in 8"
      :key="x"
    >
      <div
        class="block"
        v-for="y in 8"
        :key="y"
        :style="[(!(x % 2) && y % 2) || ((x % 2) && !(y % 2)) ? { background: blockColor} : null]"
      >
      <Piece
        v-if="((x % 2) && y % 2) || (!(x % 2) && !(y % 2))"
      />
      </div>
    </div>
  </div>
</template>

<script>
import Piece from './Piece'
export default {
  name: 'Board',
  components: {
    Piece
  },
  computed: {
    blockColor () {
      return this.$store.state.selectedBlockColor
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: 55px;
  width: 55px;
  background: #ECF0F1;
}
</style>