class Store {
  #stroe

  constructor() {
    this.#stroe = window.sessionStorage
  }

  get(key) {
    try {
      const val = this.#stroe.getItem(key)
      return JSON.parse(val)
    } catch (error) {
      console.log(error);
      return null
    }
  }

  // eslint-disable-next-line consistent-return
  set(key, val) {
    try {
      const _val = JSON.stringify(val)
      this.#stroe.setItem(key, _val)
      return true
    } catch (error) {
      console.log(error);
    }
  }

  remove(key) {
    this.#stroe.removeItem(key)
  }
}

const ls = new Store()

export { ls }