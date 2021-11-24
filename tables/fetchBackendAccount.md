|              Param               |   Type    |                         Description                          | Required |
| :------------------------------: | :-------: | :----------------------------------------------------------: | :------: |
|            backendURL            | *String*  |              Fully qualified URL for blockbook               |    yes    |
|          addressOrXpub           | *String*  | An address or [*xPub*](types/#xpub) to fetch UTXOs for |    yes     |
|             options              | `Object`  | Optional queries based on https://github.com/syscoin/blockbook/blob/master/docs/api.md#get-xpub |          |
|               xpub               | *Boolean* | If addressOrXpub is an [*xPub*](types/#xpub) set to true |          |
| Signer | [*Signer*](types/#Signer)  | [*Signer*](types/#Signer) object if you wish to update change/receiving indexes from backend provider (and XPUB token information is provided in response) |          |
