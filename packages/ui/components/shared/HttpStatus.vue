<template lang="pug">
span(:class="statusIndicator()") {{status}} - {{statusText()}}
</template>

<script>
import * as statuses from 'statuses'

export default {
  props: {
    status: {
      type: Number,
      default: null
    }
  },
  methods: {
    statusIndicator() {
      const status = this.$props.status
      if (status >= 400) {
        return 'has-background-danger'
      } else if (status >= 300) {
        return 'has-background-warning'
      } else if (status >= 200) {
        return 'has-background-success'
      }
    },
    statusText() {
      return statuses[this.$props.status]
    }
  }
}
</script>

<style scoped lang="scss">
span {
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  color: #fff;
  background: gray;
}
</style>
