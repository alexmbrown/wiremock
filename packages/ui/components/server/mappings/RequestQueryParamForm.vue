<template lang="pug">
.columns
  .column.is-4
    validation-provider(name="Key" rules="required" v-slot="{ errors }")
      b-field(:type="{'is-danger': errors[0]}" :message="errors[0]")
        b-input(type="text" v-model.trim="key")
  .column.is-3
    validation-provider(name="Matcher" rules="required" v-slot="{ errors }")
      b-field(:type="{'is-danger': errors[0]}" :message="errors[0]")
        b-select(expanded v-model="matcher")
          option(vale="equalTo") Equal To
          option(vale="matches") Matches
          option(vale="doesNotMatch") Does Not Match
          option(vale="contains") Contains
  .column.is-4
    validation-provider(name="Value" rules="required" v-slot="{ errors }")
      b-field(:type="{'is-danger': errors[0]}" :message="errors[0]")
        b-input(type="text" v-model.trim="value")
  .column.is-1(v-if="queryParam")
    button.button
      span.icon
        i.mdi.mdi-delete
</template>

<script>
export default {
  props: ['queryParam'],
  data() {
    return {
      key: '',
      matcher: null,
      value: ''
    }
  },
  params: {
    queryParam: {
      type: Object,
      default: null
    }
  }
}
</script>
