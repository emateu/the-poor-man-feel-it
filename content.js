/* global chrome */

const removeAllCookies = function () {
  if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies
  }

  var removeCookie = function (cookie) {
    var url = 'http' + (cookie.secure ? 's' : '') + '://' + cookie.domain + cookie.path
    chrome.cookies.remove({'url': url, 'name': cookie.name})
  }

  chrome.cookies.getAll({}, function (allCookies) {
    var count = allCookies.length
    for (var i = 0; i < count; i++) {
      removeCookie(allCookies[i])
    }
  })
}

function ownProvider1 () {
  let elem

  elem = document.querySelector('.mfp-wrap.mfp-align-top.mfp-auto-cursor.modal-pase.mfp-ready')
  if (elem) elem.remove()

  elem = document.querySelector('.mfp-bg.modal-pase.mfp-ready')
  if (elem) elem.remove()

  elem = document.querySelector('.lock')
  if (elem) {
    elem.style.opacity = 1
    elem.classList.remove('lock')
  }

  Array.of(document.querySelectorAll('.banner.smt')).map(k => (k[0] ? k[0].remove() : null))
}

function ownProvider2 () {
  removeAllCookies()
}

function ownProvider3 () {
  let elem

  elem = document.querySelector('.modalLoginPase')
  if (elem) elem.remove()

  elem = document.querySelector('#cboxOverlay')
  if (elem) elem.remove()
}

if (window.location.host.indexOf('clarin.com') !== -1) setInterval(ownProvider1, 2000)
if (window.location.host.indexOf('lanacion.com') !== -1) setInterval(ownProvider2, 2000)
if (window.location.host.indexOf('ole.com.ar') !== -1) setInterval(ownProvider3, 2000)
