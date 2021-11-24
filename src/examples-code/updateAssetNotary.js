export const updateAssetNotary = `\`\`\`js
const mnemonic = 'air leader stone antenna first shrug panic before nut sport bench keen'
// blockbook URL
const backendURL = 'https://sys-explorer.tk/' // if using localhost you don't need SSL see use 'systemctl edit --full blockbook-syscoin.service' to remove SSL from blockbook
const sjs = require('syscoinjs-lib')
// 'null' for no password encryption for local storage and 'true' for testnet
const HDSigner = new sjs.utils.HDSigner(mnemonic, null, true)
const syscoinjs = new sjs.Syscoin(HDSigner, backendURL)
const syscointx = require('syscointx-js')

async function updateAssetNotary () {
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  const assetGuid = '2039276165'
  // the notary keyPair
  const keyPair = HDSigner.createKeypair(0)
  // get the p2wpkh payment so we can get the keyid (payment.hash)
  const payment = sjs.utils.bitcoinjs.payments.p2wpkh({
    pubkey: keyPair.publicKey,
    network: HDSigner.Signer.network
  })
  // the notary key and the details can be updated independently but we will update both here
  const notaryKeyID = Buffer.from(payment.hash.toString('hex'), 'hex')
  const notaryDetails =
  {
    // endpoint must be encoded in utf8 using Buffer.from (default) because it should encode as bytes represented by base64 string (encodeToBase64)
    endpoint: Buffer.from(syscointx.utils.encodeToBase64('https://test12.com')),
    instanttransfers: true,
    hdrequired: false
  }
  // update auxfee details
  const assetOpts = { notarykeyid: notaryKeyID,  notarydetails: notaryDetails }
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

export default updateAssetNotary;
