
export const assetBurnToSys = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function assetBurnToSys () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  // empty ethaddress means burning SYSX to SYS, otherwise its burning asset to goto Etheruem
  const assetOpts = { ethaddress: Buffer.from('') }
  // in reality this would be a known asset (SYSX)
  const assetGuid = '3372068234'
  // burn 1 satoshi (not COINS)
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetGuid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(1), address: 'tsys1qdflre2yd37qtpqe2ykuhwandlhq04r2td2t9ae' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetAllocationBurn(assetOpts, txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}
`

export default assetBurnToSys;
