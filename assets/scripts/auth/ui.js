'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  console.log(store)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess
}
