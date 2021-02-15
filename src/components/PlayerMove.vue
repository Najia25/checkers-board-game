<template>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Click on a piece
        </v-card-title>

        <v-card-subtitle>
          Choose moves:
        </v-card-subtitle>

        <v-card-text>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {

  computed: {
    dialog () {
      return false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>