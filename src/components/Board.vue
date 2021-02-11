<template>
  <div class="grid">
    <div
      class="row d-flex flex-nowrap"
      v-for="x in 8"
      :key="x"
    >
      <div
        class="block"
        v-for="y in 8"
        :key="y"
        :style="[(!(x % 2) && y % 2) || ((x % 2) && !(y % 2)) ? { background: 'red'} : null]"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
}
</script>

<style lang="scss" scoped>
.block {
  height: 55px;
  width: 55px;
  background: #ECF0F1;
}
</style>