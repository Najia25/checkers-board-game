<template>
  <div class="grid mx-5 mb-5">
    <div
      class="board-row d-flex flex-nowrap flex-row"
      v-for="(row, rowindex) in size"
      :key="rowindex"
    >
      <div
        class="block"
        v-for="(column, columnindex) in size"
        :key="columnindex"
        :style="[(!(row % 2) && column % 2) || (row % 2 && !(column % 2)) ? { background: blockColor} : null]"
      >
      
      <!-- display piece where row(x) and column(y) both are even and where row(x) and column(y) both are odd -->
      <!-- hide piece in the middle two rows -->

      <Piece
        v-if="(row % 2 && column % 2) || (!(row % 2) && !(column % 2))"
        :class="{'d-none': (row === size / 2 || row === (size / 2) + 1)}"
        :isFirstTeam="row < size / 2"
        :isSecondTeam="row > (size / 2) + 1"
        :id="column + (size * rowindex)"
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
      id: 0
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

@media screen and (max-width: 560px) {
  .block {
    height: 12vh;
    width: 12vw;
  }
}
</style>
