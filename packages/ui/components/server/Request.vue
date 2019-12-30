<template lang="pug">
  n-link(:to="`/${serverId}/requests/${request.id}`")
    strong.has-text-grey-dark.is-size-6 {{request.request.url}}
    div
      HttpMethod(:method="request.request.method")
      span {{request.request.loggedDate | moment("MMM Do YYYY HH:MM:SS")}}
      HttpStatus(:status="request.response.status")
</template>

<script>
import HttpMethod from '~/components/shared/HttpMethod'
import HttpStatus from '~/components/shared/HttpStatus'

export default {
  components: {
    HttpMethod,
    HttpStatus
  },
  props: {
    request: {
      type: Object,
      default: null
    }
  },
  computed: {
    serverId() {
      return this.$route.params.serverId
    },
    path() {
      const request = this.mapping.request
      return (
        request.url ||
        request.urlPath ||
        request.urlPattern ||
        request.urlPathPattern
      )
    }
  }
}
</script>

<style scoped lang="scss">
a {
  display: block;
  padding: 0.5rem;
  border-bottom: 1px solid #e3e3e3;
}
strong {
  display: inline-block;
  margin-bottom: 0.5rem;
}
div {
  display: flex;
  justify-content: space-between;
}
</style>
