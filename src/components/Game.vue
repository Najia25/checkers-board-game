<template>
  <v-container class="d-flex justify-center">
    <Board />
    <ColorSettings />
  </v-container>
</template>

<script>
  import Board from './Board'
  import ColorSettings from './ColorSettings'
  export default {
    name: 'Game',
    components: {
      Board,
      ColorSettings
    },
    data: () => ({
    })
  }
</script>
