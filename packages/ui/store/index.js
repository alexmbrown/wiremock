export const state = () => ({
  mapping: null,
  mappings: [],
  selectedServer: null,
  servers: []
})

export const mutations = {
  addServer(state, server) {
    state.servers.push(server)
  },
  selectServer(state, server) {
    state.selectedServer = server
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
  getServers(state) {
    return state.servers
  },
  getServer(state) {
    return (id) => state.servers.find((server) => server.id === id)
  }
}
