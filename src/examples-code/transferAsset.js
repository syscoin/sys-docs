export const sendAsset = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function transferAsset () {
  const feeRate = new sjs.utils.BN(10)
  // set to false for ZDAG, true disables it but it is replaceable by bumping the fee
  const txOpts = { rbf: false }
  const assetguid = '3813460941'
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(500), address: 'tsys1qgkyez6kz2l2qkr5zmjmwx0rwkrkylf2p09lyd4' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default sendAsset;
