<template lang="pug">
  ul.has-background-white-bis
    li(v-for="(mapping, index) in mappings" :key="mapping.id")  
        Mapping(:mapping="mapping")
</template>

<script>
import Mapping from '~/components/server/Mapping'

export default {
  components: {
    Mapping
  },
  computed: {
    mappings() {
      return this.$store.state.mappings
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  overflow-y: auto;
  width: 25rem;
  box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>
