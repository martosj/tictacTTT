'use strict'
const config = require('../config')
const store = require('../store')
const signUp = function (data) {
  console.log('api data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('api data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
module.exports = {
  signUp,
  signIn

}
