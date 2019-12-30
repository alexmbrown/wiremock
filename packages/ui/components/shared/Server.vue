<template lang="pug">
  div
    .is-size-4.has-text-grey-dark
        .indicator(:class="healthIndicator")
        | {{server.name}}
    .has-text-grey.is-size-7 {{server.protocol}}://{{server.host}}:{{server.port}}
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      healthIndicator: 'has-background-grey-light'
    }
  },
  async created() {
    const server = this.$props.server
    if (server && server.client && server.client.healthcheck) {
      if (await server.client.healthcheck()) {
        this.healthIndicator = 'has-background-success'
      } else {
        this.healthIndicator = 'has-background-danger'
      }
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
