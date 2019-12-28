<template lang="pug">
  section
    Mappings
    NuxtChild
</template>

<script>
import Mappings from '~/components/server/Mappings'

export default {
  components: {
    Mappings
  }
}
</script>

<style lang="scss">
section {
  display: flex;
  height: calc(100% - 64px);
}
.columns {
  align-items: stretch;
}
</style>
