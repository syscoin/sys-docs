|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
|          res          | [*Res*](/docs/dev-resources/documentation/javascript-sdk-ref/types#res) | The resulting object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
| notaryAssets | [*NotaryDetails*](/docs/dev-resources/documentation/javascript-sdk-ref/types#notarydetails) | Asset objects that are required for notarization, fetch signatures via [fetchNotarizationFromEndPoint()](/docs/dev-resources/documentation/javascript-sdk-ref/utils#fetchnotarizationfromendpoint) | no |
| Signer | [*Signer*](/docs/dev-resources/documentation/javascript-sdk-ref/utils#Signer) | Signer used to sign transaction | no |
| pathIn | *String* | Custom HD BIP32 path useful if signing from a specific address like a multisig | no |

