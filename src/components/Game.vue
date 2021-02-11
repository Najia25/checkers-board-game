<template>
  <v-container>
    <Board />
  </v-container>
</template>

<script>
  import Board from './Board'
  export default {
    name: 'Game',
    components: {
      Board
    },
    data: () => ({
    })
  }
</script>
