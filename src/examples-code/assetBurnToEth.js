
export const assetBurnToEth = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function assetBurnToEth () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  const assetOpts = { ethaddress: Buffer.from('07C72973d42D28de80D47Eb1F8Bc4a8ee0D5bBb1', 'hex') }
  // in reality this would be a known asset (SYSX)
  const assetGuid = '1965866356'
  // burn 1 satoshi (not COINS)
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = 'tsys1q7zewkwya3je369vyzq5l5e83mrvdqwzgvv9nzg'
  const assetMap = new Map([
    [assetGuid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(1), address: 'tsys1quexf5zalfak2cvv9mujkh9pc3f3wrcgz7gzhh5' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = 'tsys1q7zewkwya3je369vyzq5l5e83mrvdqwzgvv9nzg'
  const sysFromXpubOrAddress = 'vpub5ZdpZuCU7ubDRZ5V7uryBDBEZxDNP67FLgPyHgPtiVgjwDk8rjxAFbg4cHNAyp9ZLXNgJRq6f9QjWCc4Ef7gUxFivP7GkSKo6ANNb2jrzhA'
  const psbt = await syscoinjs.assetAllocationBurn(assetOpts, txOpts, assetMap, sysChangeAddress, feeRate, sysFromXpubOrAddress)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}
`

export default assetBurnToEth;
