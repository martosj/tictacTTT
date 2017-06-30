'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('.box').on('click', nextPlay)
  $('#playagain').on('click', startGame)

  let turn = 'x'

  function startGame () {
    $.each($('.box'), clearSquare)

    $('.box').on('click', nextPlay)

    document.winner = null
    setMessage(turn + 'gets to move.')
  }

  function clearSquare () {
    $(this).text('')
  }

  function setMessage (msg) {
    document.getElementById('message').innerText = msg
  }

  function nextPlay (event) {
    if (document.winner != null) {
      setMessage(document.winner + 'u already lost!!!')
    } else if (event.target.innerText === '') {
      event.target.innerText = turn
      switchTurn()
    } else {
      setMessage('box is taken, cheater.')
    }
  }

  function switchTurn () {
    if (checkforWinner(turn)) {
      setMessage('Winner, winner, chicken dinner" + GAME OVER')
      $('.box').off('click', nextPlay)
    } else if (turn === 'x') {
      turn = 'o'
      setMessage("It's " + turn + " 'turn")
    } else {
      turn = 'x'
      setMessage("It's " + turn + " 'turn")
    }
  }

  function checkforWinner (move) {
    if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move)) {
      return true
    }
  }

  function checkRow (a, b, c, move) {
    let result = false
    if (getSquare(a) === move && getSquare(b) === move && getSquare(c) === move) {
      result = true
    }
    return result
  }

  function getSquare (number) {
    return document.getElementById('s' + number).innerText
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
