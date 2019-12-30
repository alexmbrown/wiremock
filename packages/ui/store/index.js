export const state = () => ({
  servers: [],
  mappings: []
})

export const mutations = {
  addServer(state, server) {
    state.servers.push(server)
  },
  setMappings(state, mappings) {
    state.mappings = mappings
  }
}

export const getters = {
  getServer(state) {
    return (id) => state.servers.find((server) => server.id === id)
  }
}
