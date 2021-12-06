|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
|          res         | [*Res*](/docs/dev-resources/documentation/javascript-sdk-ref/types#res) | The resulting object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
|                   wif                    | *String* | Private key in [WIF](https://en.bitcoin.it/wiki/Wallet_import_format) format to sign inputs of the transaction for |    yes     |
| notaryAssets | [*NotaryDetails*](/docs/dev-resources/documentation/javascript-sdk-ref/types#notarydetails) | Asset objects that are required for notarization, fetch signatures via [fetchNotarizationFromEndPoint()](/docs/dev-resources/documentation/javascript-sdk-ref/utils#fetchnotarizationfromendpoint) | no |
