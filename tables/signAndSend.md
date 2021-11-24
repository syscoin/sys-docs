|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
|          res          | [*Res*](types/#res) | The resulting object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
| notaryAssets | [*NotaryDetails*](types/#notarydetails) | Asset objects that are required for notarization, fetch signatures via [fetchNotarizationFromEndPoint()](utils/#fetchnotarizationfromendpoint) | no |
| Signer | [*Signer*](utils/#Signer) | Signer used to sign transaction | no |
| pathIn | *String* | Custom HD BIP32 path useful if signing from a specific address like a multisig | no |

