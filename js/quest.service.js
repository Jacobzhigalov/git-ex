'use strict'


var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function createQuestsTree() {

  gQuestsTree = createQuest('Male?')
  gQuestsTree.yes = createQuest('Gandhi')
  gQuestsTree.no = createQuest('Rita')
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function resetQuestions() {
  gCurrQuest = gQuestsTree
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // Done: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // TODO: Create and Connect the 2 Quests to the quetsions tree
  const newQuest = createQuest(newQuestTxt)
  newQuest.yes = createQuest(newGuessTxt)
  newQuest.no = gCurrQuest
  gPrevQuest[lastRes] = newQuest
}

function getCurrQuest() {
  return gCurrQuest
}

