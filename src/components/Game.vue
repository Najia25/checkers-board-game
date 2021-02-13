<template>
  <v-container class="d-flex justify-center flex-wrap">
    <div class="player-section">
      <div class="player-turn">
        <span :style="{color: 'green'}">
          <b>Current turn for:</b>
        </span>
        <span :style="{color: player.turn ? selectedPieceColorFirstTeam : selectedPieceColorSecondTeam}">
          <b>{{ player.turn ? selectedPieceColorFirstTeam : selectedPieceColorSecondTeam }}</b>
        </span>
      </div>
      <PlayerMove />
    </div>
    <Board />
    <ColorSettings />
  </v-container>
</template>

<script>
  import Board from './Board'
  import PlayerMove from './PlayerMove'
  import ColorSettings from './ColorSettings'
  import { mapState } from  'vuex'
  export default {
    name: 'Game',
    components: {
      Board,
      ColorSettings,
      PlayerMove
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['selectedPieceColorFirstTeam', 'selectedPieceColorSecondTeam', 'player'])
    },
    // created () {

    // }
  }
</script>
