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
        <v-btn-toggle class="d-flex justify-space-around" v-model="pieceColorFirstTeam" mandatory>
          <v-btn
            v-for="item in pieceColors"
            :key="item.color"
            :style="{background: item.color}"
            x-small
            @change="selectedItem = item.id"
            :value="item.color"
            :disabled="selectedItem === item.id"
            fab
          >
          </v-btn>
        </v-btn-toggle>

        <div class="subtitle-1">
          Second Team
        </div>
        <v-btn-toggle class="d-flex justify-space-around" v-model="pieceColorSecondTeam" mandatory>
          <v-btn
            v-for="item in pieceColors"
            :key="item.color"
            :style="{background: item.color}"
            x-small
            @change="selectedItem = item.id"
            :value="item.color"
            :disabled="selectedItem === item.id"
            fab
          >
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blockColor: '',
      pieceColorFirstTeam: '',
      pieceColorSecondTeam: '',
      selectedItem: 0
    }
  },
  computed: {
    blockColors () {
      return this.$store.state.blockColors
    },
    pieceColors () {
      return this.$store.state.pieceColors
    }

  },
  created () {
    let count = 1;
    
    this.pieceColors.forEach(el => {
      el.id = count
      count++
    })
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

</style>