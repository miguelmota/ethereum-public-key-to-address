var publicKeyToAddress = require('../')

var publicKey = document.querySelector('#publickey')
var submit = document.querySelector('#submit')
var output = document.querySelector('#output')

submit.addEventListener('click', update)
publicKey.addEventListener('input', update)

update()

function update(event) {
  if (event) event.preventDefault()
  output.innerHTML = ''
  try {
    output.innerHTML = publicKeyToAddress(publicKey.value)
  } catch(err) {
    // noop
  }
}
