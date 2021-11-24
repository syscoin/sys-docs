export const transferAssetFundedByXpub = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function transferAssetFundedByXpub () {
  const feeRate = new sjs.utils.BN(10)
  // set to false for ZDAG, true disables it but it is replaceable by bumping the fee
  const txOpts = { rbf: true }
  const assetguid = '341906151'
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(100000), address: 'tsys1qk0mrytgd06tc4rdtcs7h6nvx9ph67rjavv7qx6' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const result = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate, 'vpub5ZnEznWQvUgz3caxxZVnfnxkHkDstTFrsdSi9zQAf48ozc4a1XdfaAY6eBgKigm4NxykfcFh7d3oBwMHqKzzGo2jKET8AbypuuffvbBwAwH')
  if (!result) {
    console.log('Could not create transaction, not enough funds?')
    return
  }
  await syscoinjs.signAndSend(result.res, result.assets)
}`

export default transferAssetFundedByXpub;
