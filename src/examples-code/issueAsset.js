export const issueAsset = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function issueAsset () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  const assetGuid = '3813460941'
  // mint 11000 satoshi (not COINS)
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetGuid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(6000), address: 'tsys1qpay7ehn7epk5dmh8xv7dn5ksvyhr06323mtz0s' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetSend(txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default issueAsset;
