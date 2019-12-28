<template lang="pug">
span(:class="method") {{method}}
</template>

<script>
export default {
  props: {
    method: {
      type: String,
      default: null
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
  text-transform: uppercase;

  &.GET {
    background: #684fb9;
  }

  &.POST {
    background: #4fa100;
  }

  &.PUT {
    background: #cd6a00;
  }

  &.PATCH {
    background: #ac9300;
  }

  &.DELETE {
    background: #cb0e0e;
  }

  &.OPTIONS,
  &.HEAD {
    background: #0084ad;
  }
}
</style>
