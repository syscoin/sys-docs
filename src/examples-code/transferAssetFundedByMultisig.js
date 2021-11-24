export const transferAssetFundedByMultisig = `\`\`\`js
async function transferAssetFundedByMultisig() {
  const mnemonic1 = 'bicycle lucky earn primary wasp ranch dinner gravity property tenant gospel nephew soul cruise tool'
  const HDSigner1 = new sjs.utils.HDSigner(mnemonic1, null, true)
  // create key pair of the current receiving index and get its path right after that to pass in to signing
  // you can also pass in an index into this function to create a specific receiving index key and then also pass it in to getHDPath to get its path as well
  hdSignerKP = await HDSigner.createKeypair()
  const hdSignerPath = HDSigner.getHDPath()
  hdSigner1KP = await HDSigner1.createKeypair()
  const hdSignerPath1 = HDSigner1.getHDPath()
  const p2ms = sjs.utils.bitcoinjs.payments.p2ms({
    m: 2, pubkeys: [
      hdSignerKP.publicKey,
      hdSigner1KP.publicKey,
    ], network: HDSigner.Signer.network})
  const addressMS = sjs.utils.bitcoinjs.payments.p2wsh({
    redeem: p2ms
  })
  // if SYS need change sent, set this address. null to let HDSigner find a new address for you
  const sysChangeAddress = null
  const feeRate = new sjs.utils.BN(10)
  const txOpts = { rbf: true }
  // send some gas to the multisig
  const outputsArr = [
    { address: addressMS.address, value: new sjs.utils.BN(10000000) }
  ]
  const assetguid = '341906151'
  // if assets need change sent, set this address. null to let HDSigner find a new address for you
  const assetChangeAddress = null
  let psbt = await syscoinjs.createTransaction(txOpts, sysChangeAddress, outputsArr, feeRate)
  if (!psbt) {
    console.log('Could not create transaction, not enough funds?')
  }

  // send some asset to the multisig
  let assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(6000), address: addressMS.address }] }]
  ])
  let result = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate)
  if (!result) {
    console.log('Could not create transaction, not enough funds?')
    return
  }
  console.log('Waiting for 10 seconds so we can spend the multisig(wait for 1 block)...')
  await sleep(10000);
  // now spend the asset from the multisig
  assetMap = new Map([
    [assetguid, { changeAddress: assetChangeAddress, outputs: [{ value: new sjs.utils.BN(5000), address: 'tsys1qk0mrytgd06tc4rdtcs7h6nvx9ph67rjavv7qx6' }] }]
  ])
  const sysFromXpubOrAddress = [addressMS.address]
  result = await syscoinjs.assetAllocationSend(txOpts, assetMap, sysChangeAddress, feeRate, sysFromXpubOrAddress, null, p2ms.output)
  if (!result) {
    console.log('Could not create transaction, not enough funds?')
    return
  }
  // this should add signature with 0th index path in HDSigner
  psbt = await syscoinjs.signAndSend(result.psbt, result.assets, null, hdSignerPath)
  // this should add second signature with 0th index path in HDSigner1
  await syscoinjs.signAndSend(psbt, result.assets, HDSigner1, hdSignerPath1)
}`

export default transferAssetFundedByMultisig;
