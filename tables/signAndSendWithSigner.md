|                  Param                   |   Type   |                         Description                          | Required |
| :--------------------------------------: | :------: | :----------------------------------------------------------: | :------: |
|          res          | [*Res*](types/#res) | The resulting object passed in which is assigned from syscointx.createTransaction() / syscointx.createAssetTransaction() |    yes     |
|          Signer         | [*Signer*](types/#Signer) |                                                              |    yes     |
| notaryAssets | [*NotaryDetails*](types/#notarydetails) | Asset objects that are required for notarization, fetch signatures via [fetchNotarizationFromEndPoint()](utils/#fetchnotarizationfromendpoint) | no |
