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
        <v-btn-toggle v-model="blockColor" mandatory>
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
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blockColor: ''
    }
  },
  computed: {
    blockColors () {
      return this.$store.state.blockColors
    }
  },
  watch: {
    blockColor () {
      this.$store.commit('changeBlockColor', this.blockColor)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>