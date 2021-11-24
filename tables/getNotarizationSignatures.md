|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
| notaryAssets | [*NotaryDetails*](types/#notarydetails) | Asset objects that require notarization, fetch signatures via fetchNotarizationFromEndPoint() |    yes     |
|                  txHex                   | *String* | Signed transaction hex created from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
