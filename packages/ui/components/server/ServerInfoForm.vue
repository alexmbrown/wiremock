<template lang="pug">
  form
    .columns
      .column.is-full
        validation-provider(name="Name" rules="required" v-slot="{ errors }")
          b-field(label="Name" :type="{'is-danger': errors[0]}" :message="errors[0]")
            b-input(type="text" v-model.trim="name")
    .columns
      .column.is-3
        b-field(label="Protocol")
          b-select(expanded v-model="protocol")
            option(vale="HTTP") HTTP
            option(vale="HTTPS") HTTPS
      .column.is-6
        validation-provider(name="Host" rules="required" v-slot="{ errors }")
          b-field(label="Host" :type="{'is-danger': errors[0]}" :message="errors[0]")
            b-input(type="text" v-model.trime="host")
      .column.is-3
        validation-provider(name="Port" rules="required|between:0,65535" v-slot="{ errors }")
          b-field(label="Port" :type="{'is-danger': errors[0]}" :message="errors[0]")
            b-input(type="number" v-model.number="port")
</template>

<script>
export default {
  data() {
    return {
      name: '',
      host: '',
      port: null,
      protocol: 'HTTP'
    }
  },
  computed: {
    value() {
      return {
        name: this.name,
        host: this.host,
        port: this.port,
        protocol: this.protocol
      }
    }
  }
}
</script>

<style>
form {
  width: 100%;
}
</style>
