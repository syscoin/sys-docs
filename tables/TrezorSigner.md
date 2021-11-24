|              Param               |   Type    |                         Description                          | Required |
| :------------------------------: | :-------: | :----------------------------------------------------------: | :------: |
| password  |           *String*            |     Encryption password for local storage on web clients     |    no    |
| isTestnet |           *Boolean*           |              If using testnet set this to true               |    no    |
| networks  | [*Networks*](types/#networks) | Defaults to Syscoin network. Bitcoinjs-lib network settings for coin being used |    no    |
|  SLIP44   |           *Number*            | SLIP44 value for the coin, see: [SLIP44 Values](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) |    no    |
| pubTypes  |           *String*            | Defaults to Syscoin ZPub/VPub types. Specific ZPub for BIP84 and VPub for testnet |    no    |
| connectSrc | *String* | URL source to connect to | no |
| disableLazyLoad | *Boolean* | Prevents iframe injection until TrezorConnect.method is be called | no |

