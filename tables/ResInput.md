|    Key    |              Type               |                       Description                        |
| :-------: | :-----------------------------: | :------------------------------------------------------: |
|   type    |            *String*             |                                                          |
|  address  |            *String*             |        Syscoin address funds are being sent from         |
|   txId    |            *String*             |                      Transaction ID                      |
|   path    |            *String*             |                                                          |
|   vout    |            *Number*             |                      Output number                       |
|   value   |              *BN*               |                 Value of the transaction                 |
| locktime  |            *Number*             | Raw locktime. Non-0 value also locktime-activates inputs |
| assetInfo | [*AssetInfo*](types/#assetinfo) |  Information of an asset to be sent in the transaction   |

