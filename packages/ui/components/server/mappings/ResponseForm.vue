<template lang="pug">
div {{response}}
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      default: null
    }
  },
  methods: {
    value() {
      return {}
    }
  }
}
</script>
