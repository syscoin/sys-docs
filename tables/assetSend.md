|              Param               |   Type    |                         Description                          | Required |
| :------------------------------: | :-------: | :----------------------------------------------------------: | :------: |
|   txOpts   | [*TransactionOptions*](types/#transactionoptions)  |                     Transaction options                      | no |
| assetMap |   [*AssetOutputs*](types/#assetoutputs) *Map*   |        Mapping of asset GUIDs to their desired outputs         |    yes     |
|         sysChangeAddress         | *String*  | Change address if defined is where Syscoin only change outputs are sent to. If not defined and [Signer](utils/#Signer) is defined then a new change address will be automatically created using the next available change address index in the [HD path](https://learnmeabitcoin.com/technical/derivation-paths) | no |
|             feeRate              |   *BN*    | Defaults to 10 satoshi per byte. How many satoshi per byte the network fee should be paid out as | no |
|       sysFromXpubOrAddress       | *String*  | If wanting to fund from a specific [*xPub*](types/#xpub) or address this field should be set | no |
|    utxos   | [*UTXOs*](types/#utxos) | Pass in specific UTXOs to fund a transaction, should be sanitized using <a href="utils/#sanitizeblockbookutxos">utils.sanitizeBlockbookUTXOs()</a> | no |
| redeemOrWitnessScript | *String* | Redeem script for P2SH and witnessScript for P2WSH spending conditions | no |

