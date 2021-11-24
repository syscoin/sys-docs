export const transferAssetWithMemo = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function transferAssetWithMemo () {
  const feeRate = new sjs.utils.BN(10)
  // data carrying memo field added to opreturn commitment
  const memo = Buffer.from('a7bf215279d3f6568dcd17c429d41a35a466f803', 'hex')
  const memoHeader = Buffer.from([0xfe, 0xfe, 0xaf, 0xaf, 0xaf, 0xaf])
  // set to false for ZDAG, true disables it but it is replaceable by bumping the fee
  const txOpts = { rbf: true, memo: memo, memoHeader: memoHeader }
  const assetguid = '341906151'
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  const assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(5), address: 'tsys1qk0mrytgd06tc4rdtcs7h6nvx9ph67rjavv7qx6' }] }]
  ])
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
  const memoExtracted = sjs.utils.getMemoFromOpReturn(psbt.txOutputs, memoHeader)
  console.log('memo extracted from transaction ' + memoExtracted.toString('hex'))
}`

export default transferAssetWithMemo;
