export const updateAssetAuxFees = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)

async function updateAssetAuxFees () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  const assetGuid = '2229676993'
  const scalarPct = 1000
  // the aux fee keyPair
  const keyPair = HDSigner.createKeypair(0)
  // get the p2wpkh payment so we can get the keyid (payment.hash)
  const payment = sjs.utils.bitcoinjs.payments.p2wpkh({
    pubkey: keyPair.publicKey,
    network: HDSigner.Signer.network
  })
  const auxFeeKeyID = Buffer.from(payment.hash.toString('hex'), 'hex')
  // setup the auxfee table
  const auxFees = [
    {
      bound: new sjs.utils.BN(0),
      percent: 1 * scalarPct
    },
    {
      bound: new sjs.utils.BN(10 * syscointx.utils.COIN),
      percent: 0.4 * scalarPct
    },
    {
      bound: new sjs.utils.BN(250 * syscointx.utils.COIN),
      percent: 0.2 * scalarPct
    },
    {
      bound: new sjs.utils.BN(2500 * syscointx.utils.COIN),
      percent: 0.07 * scalarPct
    },
    {
      bound: new sjs.utils.BN(25000 * syscointx.utils.COIN),
      percent: 0.007 * scalarPct
    },
    {
      bound: new sjs.utils.BN(250000 * syscointx.utils.COIN),
      percent: 0
    }
  ]
  // update auxfee details
  const assetOpts = { auxfeedetails: { auxfeekeyid: auxFeeKeyID, auxfees: auxFees } }
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

export default updateAssetAuxFees;
