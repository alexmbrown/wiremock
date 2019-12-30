export const state = () => ({
  servers: [],
  mapping: null,
  mappings: []
})

export const mutations = {
  addServer(state, server) {
    state.servers.push(server)
  },
  setMapping(state, mapping) {
    state.mapping = mapping
  },
  setMappings(state, mappings) {
    state.mappings = mappings
  },
  setRequest(state, request) {
    state.request = request
  },
  setRequests(state, requests) {
    state.requests = requests
  }
}

export const getters = {
  getServer(state) {
    return (id) => state.servers.find((server) => server.id === id)
  }
}
