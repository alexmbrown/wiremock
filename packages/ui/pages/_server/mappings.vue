<template lang="pug">
  section
    Mappings
</template>

<script>
import Mappings from '~/components/server/Mappings'

export default {
  components: {
    Mappings
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.server)
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
.columns {
  align-items: stretch;
}
</style>
