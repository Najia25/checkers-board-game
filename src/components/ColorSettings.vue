<template>
  <div class="settings">
    <v-card>
      <v-card-title>Choose block color:</v-card-title>
      <v-card-text>
        <v-btn-toggle v-model="blockColor" mandatory>
          <v-btn
            color="#374360"
            x-small
            value="#374360"
            fab
            class="mr-2"
          >
          </v-btn>
          <v-btn
            color="#00796B"
            x-small
            value="#00796B"
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
  watch: {
    blockColor () {
      this.$store.commit('changeBlockColor', this.blockColor)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>