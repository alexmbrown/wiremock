<template lang="pug">
div
  p {{request}}
  h5.is-size-5 Url
  .columns
    .column.is-3
      validation-provider(name="Url matching" rules="required" v-slot="{ errors }")
        b-field(label="Url Matching" :type="{'is-danger': errors[0]}" :message="errors[0]")
          b-select(expanded v-model="urlMatching")
            option(vale="url") URL
            option(vale="urlPatthern") URL Pattern
            option(vale="urlPath") URL Path
            option(vale="urlPathPattern") URL Path Pattern
    .column.is-6
      validation-provider(name="Path" rules="required" v-slot="{ errors }")
        b-field(label="Path" :type="{'is-danger': errors[0]}" :message="errors[0]")
          b-input(type="text" v-model.trim="path")
    .column.is-3
      validation-provider(name="Method" rules="required" v-slot="{ errors }")
        b-field(label="Method" :type="{'is-danger': errors[0]}" :message="errors[0]")
          b-select(expanded v-model="method")
            option(vale="GET") GET
            option(vale="POST") POST
            option(vale="PUT") PUT
            option(vale="PATCH") PATCH
            option(vale="DELETE") DELETE
            option(vale="COPY") COPY
            option(vale="HEAD") HEAD
            option(vale="OPTIONS") OPTIONS
            option(vale="LINK") LINK
            option(vale="UNLINE") UNLINK
            option(vale="PURGE") PURGE
            option(vale="LOCK") LOCK
            option(vale="UNLOCK") UNLOCK
            option(vale="PROPFIND") PROPFIND
            option(vale="VIEW") VIEW
  h5.is-size-5 Query Params
  RequestQueryParamForm(:queryParams="param" v-for="param in queryParams")
  RequestQueryParamForm(@change="onQueryParamChange($event)")
  h5.is-size-5 Headers  
  RequestHeaderForm(:headers="request.headers")
</template>

<script>
import RequestQueryParamForm from '~/components/server/mappings/RequestQueryParamForm'
import RequestHeaderForm from '~/components/server/mappings/RequestHeaderForm'

export default {
  components: {
    RequestQueryParamForm,
    RequestHeaderForm
  },
  props: {
    request: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      urlMatching: null,
      path: null,
      method: null,
      queryParams: [],
      headers: []
    }
  },
  methods: {
    onQueryParamChange(queryParam) {
      this.queryParams.push(queryParam)
    },
    value() {
      return {
        urlMatching: this.urlMatching,
        path: this.path,
        method: this.method,
        queryParams: this.queryParams,
        headers: this.headers
      }
    }
  }
}
</script>
