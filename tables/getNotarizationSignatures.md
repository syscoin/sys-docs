|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
| notaryAssets | [*NotaryDetails*](/docs/dev-resources/documentation/javascript-sdk-ref/types#notarydetails) | Asset objects that require notarization, fetch signatures via fetchNotarizationFromEndPoint() |    yes     |
|                  txHex                   | *String* | Signed transaction hex created from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
