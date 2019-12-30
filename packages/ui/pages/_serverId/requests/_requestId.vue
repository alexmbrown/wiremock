<template lang="pug">
  div {{request}}
</template>

<script>
export default {
  computed: {
    request() {
      return this.$store.state.request
    }
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.serverId)
    if (server && server.client) {
      store.commit(
        'setRequest',
        await server.client.getRequest(params.requestId)
      )
    }
  }
}
</script>
