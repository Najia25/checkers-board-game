<template>
  <div
  class="piece"
  :style="[isFirstTeam && { background: selectedPieceColorFirstTeam }, isSecondTeam && { background: selectedPieceColorSecondTeam}]"
  >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['isFirstTeam', 'isSecondTeam'],
  computed: {
    ...mapState(['selectedPieceColorFirstTeam', 'selectedPieceColorSecondTeam'])
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