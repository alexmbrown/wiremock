<template lang="pug">
  n-link(:to="'mapping/' + mapping.id")
    strong.has-text-grey-dark.is-size-6 {{mapping.path}}
    .is-clearfix
      .is-pulled-left
        HttpMethod(:method="mapping.method")
      .is-pulled-right
        HttpStatus(:status="mapping.status")
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
  }
}
</script>

<style scoped lang="scss">
a {
  display: block;
  padding: 0.5rem;
  border-bottom: 1px solid #e3e3e3;
}
</style>
