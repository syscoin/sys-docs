|            Param             |   Type   |                         Description                          | Required |
| :--------------------------: | :------: | :----------------------------------------------------------: | :------: |
| txOpts | [*TransactionOptions*](/docs/dev-resources/documentation/javascript-sdk-ref/types#transactionoptions) |                     Transaction options                      |    yes     |
|        changeAddress         | *String* | Change address if defined is where change outputs are sent to. If not defined and [Signer](/docs/dev-resources/documentation/javascript-sdk-ref/utils#Signer) is defined then a new change address will be automatically created using the next available change address index in the [HD path](https://learnmeabitcoin.com/technical/derivation-paths) |    yes    |
|          outputsArr          | `Object` | Output array defining tuples to which addresses to send coins to and how much |    yes     |
|           feeRate            |   *BN*   | Defaults to 10 satoshi per byte. How many satoshi per byte the network fee should be paid out as | no |
|      fromXpubOrAddress       | *String* | If wanting to fund from a specific [*xPub*](/docs/dev-resources/documentation/javascript-sdk-ref/types#xpub) or address this field should be set | no |
|  utxos  | [*UTXOs*](/docs/dev-resources/documentation/javascript-sdk-ref/types#utxos) | Pass in specific UTXOs to fund a transaction, should be sanitized using [utils.sanitizeBlockbookUTXOs()](/docs/dev-resources/documentation/javascript-sdk-ref/utils#sanitizeblockbookutxos) | no |
| redeemOrWitnessScript | *String* | Redeem script for P2SH and witnessScript for P2WSH spending conditions | no |

