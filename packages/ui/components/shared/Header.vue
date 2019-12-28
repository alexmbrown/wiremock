<template lang="pug">
  b-navbar.is-light
    template(slot="start")
      b-navbar-dropdown
        b-navbar-item(slot="label")
          Server(:server="servers[0]")
        b-navbar-item(v-for="(server, index) in servers" :key="server.id" @click="onServerSelect(index)")
          Server(:server="server")
        hr.dropdown-divider
        b-navbar-item
          b-icon(icon="plus")
          | Add New Server
    template(slot="end" v-if="server")
      n-link.navbar-item(:to="`/${server}/mappings`") Mappings
      n-link.navbar-item(:to="`/${server}/requests`") Requests
      n-link.navbar-item(:to="`/${server}/settings`") Settings
</template>

<script>
import Server from '~/components/shared/Server'

export default {
  components: {
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
      ]
    }
  },
  methods: {
    onServerSelect(id) {
      this.server = id
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 64px;
}
</style>
