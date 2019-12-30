<template lang="pug">
  .center
    nav.panel
      p.panel-heading Servers
      .panel-block(v-for="server in servers" :key="server.id")
          Server(:server="server")
      p.panel-block
        b-icon(icon="plus")
        | Add New Server
</template>

<script>
import Server from '~/components/shared/Server'

export default {
  components: {
    Server
  },
  computed: {
    servers() {
      return this.$store.state.servers
    }
  }
}
</script>

<style scoped lang="scss">
.panel {
  width: 25rem;
}
.panel-block:not(p) {
  padding: 0;
}
p.panel-block {
  justify-content: center;
}
a {
  width: 100%;
  padding: 12px;
}
</style>
