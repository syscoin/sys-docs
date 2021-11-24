export const updateAsset = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function updateAsset () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  const assetGuid = '2125509931'
  // update capability flags, update description and update eth smart contract address
  const assetOpts = { updatecapabilityflags: '123', contract: Buffer.from('2b1e58b979e4b2d72d8bca5bb4646ccc032ddbfc', 'hex'), description: 'new publicvalue' }
  // send asset back to ourselves as well as any change
  const assetChangeAddress = null
  // send change back to ourselves as well as recipient to ourselves
  const assetMap = new Map([
    [assetGuid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(0), address: assetChangeAddress }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetUpdate(assetGuid, assetOpts, txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default updateAsset;
