'use strict'

function saveToStorage(KEY, value) {
    const item = JSON.stringify(value)
    localStorage.setItem(KEY, item)
}

function loadFromStorage(KEY) {
    const item = localStorage.getItem(KEY)
    return JSON.parse(item)
}

function isLocalStorageThere(KEY) {
    var res = (localStorage.getItem(KEY)) ? true : false
    return res
}