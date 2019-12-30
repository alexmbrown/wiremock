<template lang="pug">
  div.is-full-height
    Header
    NuxtChild
</template>

<script>
import Header from '~/components/shared/Header'

export default {
  components: {
    Header
  },
  fetch({ store, params }) {
    const server = store.getters.getServer(params.serverId)
    if (server) {
      store.commit('selectServer', server)
    }
  }
}
</script>
