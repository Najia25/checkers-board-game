<template>
  <div class="grid mx-5">
    <div
      class="board-row d-flex flex-nowrap flex-row"
      v-for="x in size"
      :key="x"
    >
      <div
        class="block"
        v-for="y in size"
        :key="y"
        :style="[(!(x % 2) && y % 2) || (x % 2 && !(y % 2)) ? { background: blockColor} : null]"
      >
      <!-- display piece where row(x) and column(y) both are even and where row(x) and column(y) both are odd -->
      <!-- hide piece in the middle two rows -->
      <Piece
        v-if="(x % 2 && y % 2) || (!(x % 2) && !(y % 2))"
        :class="{'d-none': (x === size / 2 || x === (size / 2) + 1)}"
        :isFirstTeam="x < size / 2"
        :isSecondTeam="x > (size / 2) + 1"
      />
      </div>
    </div>
  </div>
</template>

<script>
import Piece from './Piece'
export default {
  name: 'Board',
  data () {
    return {
      size: 8,

    }
  },
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
  position: relative;
}
</style>
