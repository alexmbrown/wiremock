<template lang="pug">
    .modal-card
      header.modal-card-head
        p.modal-card-title Title
      section.modal-card-body
        validation-observer(slim ref="observer")
          ServerInfoForm(ref="form")
      footer.modal-card-foot
          b-button(@click="$emit('close')") Cancel
          b-button(type="is-primary" @click="addServer()") Add Server
</template>

<script>
import ServerInfoForm from '~/components/server/ServerInfoForm'

export default {
  components: {
    ServerInfoForm
  },
  methods: {
    async addServer() {
      if (await this.$refs.observer.validate()) {
        console.log(this.$refs.form.value)
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
