<template lang="pug">
  b-navbar.is-light.has-shadow
    template(slot="start")
      b-navbar-item(v-if="servers.length <= 0" @click="showServerModal = true")
        b-icon(icon="plus")
        | Add New Server
      b-navbar-dropdown(v-if="servers.length > 0")
        b-navbar-item(slot="label")
          Server(:server="servers[0]")
        b-navbar-item(v-for="server in servers" :key="server.id" @click="onServerSelect(server.id)")
          Server(:server="server")
        hr.dropdown-divider
        b-navbar-item(@click="showServerModal = true")
          b-icon(icon="plus")
          | Add New Server
      b-modal(:active.sync="showServerModal" has-modal-card trap-focus)
            AddServerModal(@close="showServerModal = false")
    template(slot="end" v-if="server")
      n-link.navbar-item(:to="`/${server.id}/mappings`") Mappings
      n-link.navbar-item(:to="`/${server.id}/requests`") Requests
      n-link.navbar-item(:to="`/${server.id}/settings`") Settings
</template>

<script>
import AddServerModal from '~/components/server/AddServerModal'
import Server from '~/components/shared/Server'

export default {
  components: {
    AddServerModal,
    Server
  },
  data() {
    return {
      server: null,
      showServerModal: false
    }
  },
  computed: {
    servers() {
      return this.$store.state.servers
    }
  },
  created() {
    const serverId = this.$route.params.serverId
    if (serverId) {
      this.server = this.$store.getters.getServer(serverId)
    }
  },
  methods: {
    onServerSelect(serverId) {
      this.server = this.$store.getters.getServer(serverId)
      this.$router.push(`/${serverId}/mappings`)
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 65px;
}
img {
  height: 65px;
  padding: 0.5rem;
}
span.icon {
  margin-right: 0.5rem !important;
}
</style>
