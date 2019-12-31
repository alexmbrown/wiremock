<template lang="pug">
form 
  p {{mapping}}
  h4.is-size-4 ID:&nbsp;
  hr
  h4.is-size-4 Request
  RequestForm(:request="mapping.request" ref="requestForm")
  hr
  h4.is-size-4 Response
  ResponseForm(:response="mapping.response" ref="responseForm")
</template>

<script>
import RequestForm from '~/components/server/mappings/RequestForm'
import ResponseForm from '~/components/server/mappings/ResponseForm'

export default {
  components: {
    RequestForm,
    ResponseForm
  },
  props: {
    mapping: {
      type: Object,
      default: null
    }
  },
  methods: {
    value() {
      return {
        request: this.$refs.requestForm.value(),
        response: this.$refs.responseForm.value()
      }
    }
  }
}
</script>
