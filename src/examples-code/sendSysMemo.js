export const sendSysMemo = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function sendSysMemo () {
  const feeRate = new sjs.utils.BN(10)
  const memo = Buffer.from('Gas station order id: 606c80d6cc793f13d2f0d424. Asset GUID 341906151')
  const memoHeader = Buffer.from([0xfe, 0xfe, 0xaf, 0xaf, 0xaf, 0xaf])
  const txOpts = { rbf: true, memo: memo, memoHeader: memoHeader, assetWhiteList: new Map([['341906151', {}]]) }
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = 'tsys1qnykk8e2e6wuufaz0lcdlry05fq5sj3uzczra3p'
  const outputsArr = [
    { address: 'tsys1q0hxdj9r3tyxmr66tehdhhl35l5rk4ucanteuh6', value: new sjs.utils.BN(3158692) }
  ]
  const result = await syscoinjs.createTransaction(txOpts, sysChangeAddress, outputsArr, feeRate, 'tsys1qnykk8e2e6wuufaz0lcdlry05fq5sj3uzczra3p')
  if (!result) {
    console.log('Could not create transaction, not enough funds?')
  }
  const psbt = await syscoinjs.signAndSendWithWIF(result.psbt, 'cQh85hzaUMQDCneQvuwEvKFS418gzHfaQ9MmKj9pCd8aKgRNaEDr', result.assets)
  const memoExtracted = sjs.utils.getMemoFromOpReturn(psbt.txOutputs, memoHeader)
  console.log('memo extracted from transaction ' + memoExtracted.toString())
}`

export default sendSysMemo;
