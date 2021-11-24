|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
|          res         | [*Res*](types/#res) | The resulting object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
|                   wif                    | *String* | Private key in [WIF](https://en.bitcoin.it/wiki/Wallet_import_format) format to sign inputs of the transaction for |    yes     |
| notaryAssets | [*NotaryDetails*](types/#notarydetails) | Asset objects that are required for notarization, fetch signatures via [fetchNotarizationFromEndPoint()](utils/#fetchnotarizationfromendpoint) | no |
