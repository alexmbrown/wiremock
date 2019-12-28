<template lang="pug">
  ul.has-background-white-bis
    li(v-for="(mapping, index) in mappings" :key="mapping.id")  
        Mapping(:mapping="mapping")
</template>

<script>
import Mapping from '~/components/server/Mapping'

export default {
  components: {
    Mapping
  },
  data() {
    return {
      mappings: [
        {
          id: 123,
          path: 'TEST 1',
          method: 'GET',
          status: 200
        },
        {
          id: 456,
          path: 'TEST 2',
          method: 'GET',
          status: 400
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  width: 25rem;
  box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>
