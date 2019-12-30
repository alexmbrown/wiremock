export const state = () => ({
  servers: []
})

export const mutations = {
  addServer(state, server) {
    state.servers.push(server)
  }
}
