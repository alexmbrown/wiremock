<template lang="pug">
div {{mapping}}
</template>

<script>
export default {
  computed: {
    mapping() {
      return this.$store.state.mapping
    }
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.serverId)
    if (server && server.client) {
      store.commit(
        'setMapping',
        await server.client.getStubMapping(params.mappingId)
      )
    }
  }
}
</script>
