const ark = require('arkjs')
const request = requrie('superagent')

const yourPhrase = 'huangtao1'

function generate(phrase) {
  const keys = ark.crypto.getKeys(phrase)
  const address = ark.crypto.getAddress(keys.publicKey)
  return {
    address,
    keys
  }
}

async function main() {
  address = generate(yourPhrase)

  myAcount = await getAccount()
  myBalance = await getBalance()
  await createTranscation()
}

main()

async function getAccount() {
  return request
    .get('/api/accounts/')
    .query({})
}

async function getBalance() {
  return request.get('/api/accounts/getBalance')
    .query({})
}

async function createTranscation() {
  return request.put('/api/transactions')
    .send({})
}