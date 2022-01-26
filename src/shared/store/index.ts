import persist from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(persist)

export { store }
