<template lang="pug">
  section
    ul.has-background-white-bis
      li(v-for="(request, index) in requests" :key="request.id")  
          Request(:request="request")
    NuxtChild
</template>

<script>
import Request from '~/components/server/Request'

export default {
  components: {
    Request
  },
  computed: {
    requests() {
      return this.$store.state.requests
    }
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.serverId)
    if (server && server.client) {
      const response = await server.client.allRequests()
      store.commit('setRequests', response.requests)
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
