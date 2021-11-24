|              Param               |   Type    |                         Description                          | Required |
| :------------------------------: | :-------: | :----------------------------------------------------------: | :------: |
|       sysFromXpubOrAddress       | *String*  | The [*xPub*](types/#xpub) or address to fetch UTXOs for |    yes     |
| utxoObject  | [*UTXOs*](types/#utxos)  |      Back-end provider UTXO JSON object to be sanitized      |    yes     |
|  network  | [*Network*](types/#network)  | Defaults to Syscoin Mainnet. Network to be used to create address for notary and auxfee payout address if those features exist for the asset | no |
|   txOpts   | [*TransactionOptions*](types/#transactionoptions)  | If this is passed in we use assetWhiteList field of options to skip over (if assetWhiteList is null) UTXOs if they use notarization for an asset that is not a part of assetMap | no |
| assetMap |   [*AssetOutputs*](types/#assetoutputs) *Map*   | Destination outputs for a transaction requiring UTXO sanitizing, used in assetWhiteList, check described above | no |
|         excludeZeroConf          | *Boolean* | False by default. Filtering out 0 conf UTXO, new/update/send asset transactions must use confirmed inputs only as per Syscoin Core mempool policy | no |
