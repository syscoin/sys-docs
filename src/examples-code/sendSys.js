export const sendSys = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function sendSys () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: false }
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const outputsArr = [
    { address: 'tsys1quas925cuqmlkc0082442uh68efv3hdazknmjpd', value: new sjs.utils.BN(10000000) }
  ]
  const psbt = await syscoinjs.createTransaction(txOpts, sysChangeAddress, outputsArr, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default sendSys;
