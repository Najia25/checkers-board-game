<template>
  <div class="settings">
    <v-card>
      <v-card-title>Choose block color</v-card-title>
      <v-card-text>
        <v-btn-toggle class="d-flex justify-space-around" v-model="blockColor" mandatory>
          <v-btn
            v-for="color in blockColors"
            :key="color"
            :color="color"
            x-small
            :value="color"
            fab
          >
          </v-btn>
        </v-btn-toggle>
      </v-card-text>

      <v-divider class="my-2"></v-divider>

      <v-card-title>Choose piece color</v-card-title>
      <v-card-text>
        <div class="subtitle-1">
        First Team
        </div>
        <v-btn-toggle class="d-flex justify-space-around" v-model="pieceColorFirstTeam">
          <v-btn
            v-for="item in pieceColors"
            :key="item"
            :style="{background: item}"
            x-small
            :value="item"
            :class="{'disable-events': item === selectedPieceColorSecondTeam || item === selectedPieceColorFirstTeam}"
            fab
          >
          </v-btn>
        </v-btn-toggle>

        <div class="subtitle-1">
          Second Team
        </div>
        <v-btn-toggle class="d-flex justify-space-around" v-model="pieceColorSecondTeam">
          <v-btn
            v-for="item in pieceColors"
            :key="item"
            :style="{background: item}"
            x-small
            :value="item"
            :class="{'disable-events': item === selectedPieceColorSecondTeam || item === selectedPieceColorFirstTeam}"
            fab
          >
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      blockColor: '',
      pieceColorFirstTeam: '',
      pieceColorSecondTeam: ''
    }
  },
  computed: {
    ...mapState(['blockColors', 'pieceColors', 'selectedPieceColorFirstTeam', 'selectedPieceColorSecondTeam'])
  },
  watch: {
    blockColor () {
      this.$store.commit('changeBlockColor', this.blockColor)
    },
    pieceColorFirstTeam() {
      this.$store.commit('changePieceColorFirstTeam', this.pieceColorFirstTeam)
    },
    pieceColorSecondTeam () {
      this.$store.commit('changePieceColorSecondTeam', this.pieceColorSecondTeam)
    }
  }
}
</script>

<style lang="scss" scoped>
.disable-events {
  pointer-events: none;
}
</style>