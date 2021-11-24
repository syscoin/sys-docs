export const sysBurnToAsset = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function sysBurnToAsset () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  // asset and address being minted to from Eth to Sys
  const mintAddress = 'tsys1qdflre2yd37qtpqe2ykuhwandlhq04r2td2t9ae'
  const assetGuid = '3372068234'
  // mint 10 COINS
  const amountToMint = new sjs.utils.BN(1000000000)
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetGuid, { changeAddress: assetChangeAddress, outputs: [{ value: amountToMint, address: mintAddress }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.syscoinBurnToAssetAllocation(txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default sysBurnToAsset;
