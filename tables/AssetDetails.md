|          Key          |                  Type                  |                         Description                          |
| :-------------------: | :------------------------------------: | :----------------------------------------------------------: |
|       assetGuid       |                *String*                | Unique, numeric identifier of the token generated on creation |
|       contract        |                *String*                | ERC20 address of the contract connected to this SPT for use in the SysEthereum bridge |
|        symbol         |                *String*                |                   Token symbol (in base64)                   |
|        pubData        | [*AssetPublicData*](types/#publicdata) |             Public data information of the token             |
|      totalSupply      |                *String*                |                 Total current issued supply                  |
|       maxSupply       |                *String*                |                    Maximum supply in sats                    |
|       decimals        |                *Number*                |         Number of digits of precision for the token          |
| updateCapabilityFlags |                *Number*                |              Update capabilities on this asset               |
