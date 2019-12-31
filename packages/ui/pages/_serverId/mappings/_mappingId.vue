<template lang="pug">
section
  b-button(@click="updateMapping()")
  validation-observer(slim ref="observer")
    MappingForm(:mapping="mapping" v-if="mapping" ref="form")
</template>

<script>
import MappingForm from '~/components/server/mappings/MappingForm'

export default {
  components: {
    MappingForm
  },
  computed: {
    mapping() {
      return this.$store.state.mapping
    }
  },
  async fetch({ store, params }) {
    const server = await store.getters.getServer(params.serverId)
    if (server && server.client) {
      store.commit(
        'setMapping',
        await server.client.getStubMapping(params.mappingId)
      )
    }
  },
  methods: {
    updateMapping() {
      console.log(this.$refs.form.value())
    }
  }
}
</script>

<style scoped lang="scss">
section {
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
