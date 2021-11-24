|          Key          |   Type   |                         Description                          |
| :-------------------: | :------: | :----------------------------------------------------------: |
|       precision       | *Number* |       Digits precision for this asset. Range is 0 to 8       |
|        symbol         | *String* |         Symbol up to 8 characters in length in ASCII         |
|       maxsupply       |   *BN*   | Maximum satoshis for supply. Range is 1 to 1 quintillion (10^18) |
|      description      | *String* | Description in ASCII describing token. The description will be encoded via JSON in the pubdata field for the asset and will be in the 'desc' field of the JSON object |
|       contract        | *String* | ERC20 address of the contract connected to this SPT for use in the SysEthereum bridge |
| updatecapabilityflags | *Number* | Defaults to 127 or ALL capabilities. Update capabilities on this asset. Read more [*here*](types/#updatecapabilityflags) |
|      notarykeyid      | *String* | Notary KeyID, the hash160 of the address used for notarization. Should be P2WPKH |
|     notarydetails     | [*NotaryDetails*](types/#notarydetails) | Details related to the notarization of transactions using this asset |
|     auxFeeDetails     | [*AuxFeeDetails*](types/#auxfeedetails) |  Enforce auxiliary fees to every transaction on this asset   |
