export const assetMintToSys2 = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

// pass just Eth txid and let Syscoin get proof to create transaction
async function assetMintToSys () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  // infura URL + ID and ethereum burn txid
  const assetOpts = {
    infuraurl: '<YOUR INFURA URL>',
    ethtxid: '0x3c3bfe141fcbe313f2afd31be1b63dd3a0147235161e637407fbb8605d3d294f'
  }
  // will be auto filled based on ethtxid eth-proof
  const assetMap = null
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const psbt = await syscoinjs.assetAllocationMint(assetOpts, txOpts, assetMap, sysChangeAddress, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }
}`

export default assetMintToSys2;
