export const transferAssetFundedByMultiHDSigners = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function transferAssetFundedByMultiHDSigners () {
  const mnemonic1 = 'bicycle lucky earn primary wasp ranch dinner gravity property tenant gospel nephew soul cruise tool'
  const Signer1 = new sjs.utils.HDSigner(mnemonic1, null, true)
  const feeRate = new sjs.utils.BN(10)
  // set to false for ZDAG, true disables it but it is replaceable by bumping the fee
  const txOpts = { rbf: true }
  const assetguid = '3813460941'
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(6000), address: 'tsys1qfqq6fg6jacruta85xysa4hzc00y9c0numedhh8' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const sysFromXpubOrAddress = [HDSigner.getAccountXpub(), Signer1.getAccountXpub()]
  const result = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate, sysFromXpubOrAddress)
  if (!result) {
    console.log('Could not create transaction, not enough funds?')
    return
  }
  // this should sign one of the inputs with HDSigner
  let psbt = await syscoinjs.signAndSend(result.psbt, result.assets)
  // this should sign the other input with Signer1, and then notarize, signing one input with Signer1 again
  const psbt1 = await syscoinjs.signAndSend(psbt, result.assets, Signer1)
  // this should finalize the transaction from HDSigner signing (this time notarized) and send it to network
  psbt = await syscoinjs.signAndSend(psbt1, result.assets)
}`

export default transferAssetFundedByMultiHDSigners;
