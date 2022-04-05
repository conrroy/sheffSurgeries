import { makeAutoObservable, runInAction } from 'mobx'
import { GetAccountProfile } from './api/common'
import { removeToken } from './utils/token'


class Stroe {
  constructor() {
    makeAutoObservable(this)
  }

  logined = false

  account = {}

  saveAccount(account) {
    this.account = account
  }

  getAccountProfile() {
    return GetAccountProfile().then(res => {
      runInAction(() => {
        this.loginSuccess(res)
      })
    }, () => {
      runInAction(this.logout.bind(this))
    })
  }

  loginSuccess(account) {
    console.log(account, 'accountaccountaccount');
    this.logined = true
    this.saveAccount(account)
  }

  logout() {
    removeToken()
    this.logined = false
    this.account = {}
  }
}

const RootStore = new Stroe()

export {
  RootStore
}