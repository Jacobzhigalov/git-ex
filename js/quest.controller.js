'use strict'

// NOTE: This is a global used only in the controller
var gLastRes = null



$(document).ready(init)
$('.btn-start').click(onStartGuessing)
$('.btn-yes').click({ans: 'yes'}, onUserResponse)
$('.btn-no').click({ans: 'no'}, onUserResponse)
$('.btn-add-guess').click(onAddGuess)

function init() {
  createQuestsTree()
}

function onStartGuessing() {
  // TODO: hide the game-start section
  $('.game-start').hide()
  renderQuest()
  // TODO: show the quest section
  $('.quest').show()
  
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text
  const currQuest = gCurrQuest
  $('.quest h2').text(currQuest.txt)
}

function onUserResponse(ev) {
  console.log('ev', ev)
  var res = ev.data.ans
  console.log(res)
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!')
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!')
      // TODO: hide and show new-quest section
      $('.quest').hide()
      $('.new-quest').show()
    }
  } else {
    // TODO: update the lastRes global var

    moveToNextQuest(res)
    renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault()
  var newGuess = $('#newGuess').val()
  var newQuest = $('#newQuest').val()

  // TODO: Get the inputs' values
  // TODO: Call the service addGuess

  onRestartGame()
}

function onRestartGame() {
  console.log(gQuestsTree)
  createQuestsTree()
  $('.new-quest').hide()
  $('.game-start').show()
  gLastRes = null
}


