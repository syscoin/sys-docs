|    Param     |         Type          |                         Description                          | Required |
| :----------: | :-------------------: | :----------------------------------------------------------: | :------: |
|     psbt     | [*PSBT*](/docs/dev-resources/documentation/javascript-sdk-ref/types#psbt) | The resulting PSBT object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |   yes    |
| notaryAssets |      ??????????       | Asset objects require notarization, fetch signatures via fetchNotarizationFromEndPoint() |   yes    |
|    rawTx     |       *String*        |                                                              |          |
