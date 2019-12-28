<template lang="pug">
  div
    .is-size-4.has-text-grey-dark
        .indicator(:class="statusIndicator()")
        | {{server.name}}
    .has-text-grey.is-size-7 {{server.address}}
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      default: null
    }
  },
  methods: {
    statusIndicator() {
      const server = this.$props.server
      if (server) {
        if (server.isHealthy) {
          return 'has-background-success'
        }
        return 'has-background-danger'
      }
      return 'has-background-grey-light'
    }
  }
}
</script>

<style lang="scss">
.indicator {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
span.icon {
  margin-right: 1rem;
}
.navbar-link > .navbar-item:hover {
  background: none;
}
</style>
