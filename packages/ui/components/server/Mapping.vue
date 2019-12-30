<template lang="pug">
  n-link(:to="'mapping/' + mapping.id")
    strong.has-text-grey-dark.is-size-6 {{path}}
    .is-clearfix
      .is-pulled-left
        HttpMethod(:method="mapping.request.method")
      .is-pulled-right
        HttpStatus(:status="mapping.response.status")
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
    mapping: {
      type: Object,
      default: null
    }
  },
  computed: {
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
</style>
