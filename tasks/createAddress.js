const ark = require('arkjs');

const phrases = ['biso1', 'biso2', 'biso3', 'biso4', 'biso5', 'biso6', 'biso7']

function generate(phrase) {
  const keys = ark.crypto.getKeys(phrase)
  return ark.crypto.getAddress(keys.publicKey)
}

function main() {
  addresses = phrases.map(generate)
  console.log(addresses)
}

main()

