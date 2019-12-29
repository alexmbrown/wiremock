<template lang="pug">
  b-navbar.is-light.has-shadow
    template(slot="start")
      b-navbar-dropdown
        b-navbar-item(slot="label")
          Server(:server="servers[0]")
        b-navbar-item(v-for="(server, index) in servers" :key="server.id" @click="onServerSelect(index)")
          Server(:server="server")
        hr.dropdown-divider
        b-navbar-item(@click="showServerModal = true")
          b-icon(icon="plus")
          | Add New Server
      b-modal(:active.sync="showServerModal" has-modal-card trap-focus)
            AddServerModal(@close="showServerModal = false")
    template(slot="end" v-if="server")
      n-link.navbar-item(:to="`/${server}/mappings`") Mappings
      n-link.navbar-item(:to="`/${server}/requests`") Requests
      n-link.navbar-item(:to="`/${server}/settings`") Settings
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
      servers: [
        {
          id: 123,
          name: 'Server 1',
          address: 'http://localhost:8080',
          isHealthy: true
        },
        {
          id: 456,
          name: 'Server 2',
          address: 'http://localhost:10000',
          isHealthy: false
        }
      ],
      showServerModal: false
    }
  },
  methods: {
    close() {
      console.log('test')
    },
    onServerSelect(id) {
      this.server = id
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
