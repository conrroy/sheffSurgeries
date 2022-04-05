import { ls } from "./ls"

const KEY = 'authorization'

export function setToken(value) {
  ls.set(KEY, value)
}

export function getToken() {
  return ls.get(KEY)
}

export function removeToken() {
  ls.remove(KEY)
}
