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

  console.log('Owned')
}

function ownProvider2 () {
  let elem

  elem = document.querySelector('.lnmodal.pantalla-completa.login')
  if (elem) elem.remove()
}

if (window.location.host.indexOf('clarin.com') !== -1) setInterval(ownProvider1, 2000)
if (window.location.host.indexOf('lanacion.com') !== -1) setInterval(ownProvider2, 2000)
