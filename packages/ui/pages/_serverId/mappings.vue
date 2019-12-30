<template lang="pug">
  section
    ul.has-background-white-bis
      li(v-for="(mapping, index) in mappings" :key="mapping.id")  
          Mapping(:mapping="mapping")
    NuxtChild
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
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.serverId)
    if (server && server.client) {
      const response = await server.client.allStubMappings()
      store.commit('setMappings', response.mappings)
    }
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  height: calc(100% - 64px);
}
ul {
  overflow-y: auto;
  width: 25rem;
  min-width: 25rem;
  box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>
