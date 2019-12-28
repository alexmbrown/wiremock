<template lang="pug">
  b-navbar.is-light
    template(slot="start")
      b-navbar-dropdown(label="test")
        b-navbar-item(@click="onServerSelect('1')") Server 1
        b-navbar-item(@click="onServerSelect('2')") Server 2
    template(slot="end" v-if="server")
      b-navbar-item
        n-link(:to="`/${server}/mappings`") Mappings
      b-navbar-item
        n-link(:to="`/${server}/requests`") Requests
      b-navbar-item
        n-link(:to="`/${server}/settings`") Settings
</template>

<script>
export default {
  data() {
    return {
      server: null
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
