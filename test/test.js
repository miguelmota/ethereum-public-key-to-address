const test = require('tape')
const publicKeyToAddress = require('../')

test('publicKeyToAddress', t => {
  t.plan(3)

  t.equal(publicKeyToAddress(Buffer.from('04e68acfc0253a10620dff706b0a1b1f1f5833ea3beb3bde2250d5f271f3563606672ebc45e0b7ea2e816ecb70ca03137b1c9476eec63d4632e990020b7b6fba39', 'hex')), '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')
  t.equal(publicKeyToAddress('04e68acfc0253a10620dff706b0a1b1f1f5833ea3beb3bde2250d5f271f3563606672ebc45e0b7ea2e816ecb70ca03137b1c9476eec63d4632e990020b7b6fba39'), '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')
  t.equal(publicKeyToAddress('0x04e68acfc0253a10620dff706b0a1b1f1f5833ea3beb3bde2250d5f271f3563606672ebc45e0b7ea2e816ecb70ca03137b1c9476eec63d4632e990020b7b6fba39'), '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')
})
