const { publicKeyConvert } = require('secp256k1')
const createKeccakHash = require('keccak')
const { toChecksumAddress } = require('ethereum-checksum-address')

function publicKeyToAddress (publicKey) {
  if (!Buffer.isBuffer(publicKey)) {
    if (typeof publicKey !== 'string') {
      throw new Error('Expected Buffer or string as argument')
    }

    publicKey = publicKey.slice(0, 2) === '0x' ? publicKey.slice(2) : publicKey
    publicKey = Buffer.from(publicKey, 'hex')
  }
  
  publicKey = Buffer.from(publicKeyConvert(publicKey, false)).slice(1)
  const hash = createKeccakHash('keccak256').update(publicKey).digest()
  return toChecksumAddress(hash.slice(-20).toString('hex'))
}

module.exports = publicKeyToAddress
