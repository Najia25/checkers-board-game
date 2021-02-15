<template>
  <div
  class="piece"
  :style="[isFirstTeam && { background: selectedPieceColorFirstTeam }, isSecondTeam && { background: selectedPieceColorSecondTeam}]"
  @click="handleCLick"
  >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['isFirstTeam', 'isSecondTeam', 'id'],
  computed: {
    ...mapState(['selectedPieceColorFirstTeam', 'selectedPieceColorSecondTeam', 'turn'])
  },
  methods: {
    handleCLick () {
      if(this.id !== 0) {
        if(turn) {
          if(this.isFirstTeam) {
            this.$store.dispatch('checkValidMoves', pieceId)
          }
        } else {
          if(this.isSecondTeam) {
            this.$store.dispatch('checkValidMoves', pieceId)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.piece {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  // background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>