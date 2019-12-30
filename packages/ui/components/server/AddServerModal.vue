<template lang="pug">
    .modal-card
      header.modal-card-head
        p.modal-card-title Add New Server
      section.modal-card-body
        validation-observer(slim ref="observer")
          ServerInfoForm(ref="form")
      footer.modal-card-foot
          b-button(@click="$emit('close')") Cancel
          b-button(type="is-primary" @click="addServer()") Add Server
</template>

<script>
import ServerInfoForm from '~/components/server/ServerInfoForm'
import { connect } from 'wiremock-client'
import * as uuid from 'uuid/v4'

export default {
  components: {
    ServerInfoForm
  },
  methods: {
    async addServer() {
      if (await this.$refs.observer.validate()) {
        const server = this.$refs.form.value
        server.id = uuid()
        server.client = connect(server.protocol, server.host, server.port)
        this.$store.commit('addServer', server)
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  justify-content: flex-end;
}
</style>
