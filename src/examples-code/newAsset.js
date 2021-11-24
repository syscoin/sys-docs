export const newAsset = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)
const syscointx = require('syscointx-js')

async function newAsset () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: false }
  const assetOpts = { precision: 8, symbol: 'JAG', maxsupply: new sjs.utils.BN(100000000000), description: 'publicvalue' }
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  // let HDSigner find asset destination address
  const sysReceivingAddress = null
  const psbt = await syscoinjs.assetNew(assetOpts, txOpts, sysChangeAddress, sysReceivingAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
    return
  }
  const assets = syscointx.getAssetsFromTx(psbt.extractTransaction())
  console.log('created asset ' + assets.keys().next().value)
}`

export default newAsset;
