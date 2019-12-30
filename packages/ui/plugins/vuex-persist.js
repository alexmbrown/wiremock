import VuexPersistence from 'vuex-persist'
import { connect } from 'wiremock-client'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      // strictMode: true,
      restoreState: (key, storage) => {
        console.log('restore begin')
        if (storage[key]) {
          const state = JSON.parse(storage[key])
          state.servers = state.servers.map((server) => {
            server.client = connect(server.protocol, server.host, server.port)
            return server
          })
          console.log('restore end')
          return state
        }
      }
    }).plugin(store)
  })
}
