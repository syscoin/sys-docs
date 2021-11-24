|        Key         |   Type   |                         Description                          |
| :----------------: | :------: | :----------------------------------------------------------: |
|      ethtxid       | *String* | The transaction that calls freezeBurnERC20() on ERC20Manager contract |
|      web3url       | *String* | If using eth-proof fully qualified Web3 HTTP-RPC URL that eth-proof needs to obtain the transaction proof and receipt proof information needed by Syscoin to validate the mint |
|    blocknumber     | *Buffer* | If ethtxid/web3url not provided. Block number of transaction including freezeBurnERC20() call |
|      txvalue       | *Buffer* | If ethtxid/web3url not provided. Buffer value of the transaction hex encoded in RLP format |
|       txroot       | *Buffer* | If ethtxid/web3url not provided. Buffer value of the transaction merkle root encoded in RLP format |
|   txparentnodes    | *Buffer* | If ethtxid/web3url not provided. Buffer value of the transaction merkle proof encoded in RLP format |
|       txpath       | *Buffer* | If ethtxid/web3url not provided. Buffer value of the merkle path for the transaction and receipt proof |
|    receiptvalue    | *Buffer* | If ethtxid/web3url not provided. Buffer value of the transaction receipt hex encoded in RLP format |
|    receiptroot     | *Buffer* | If ethtxid/web3url not provided. Buffer value of the receipt merkle root encoded in RLP format |
| receiptparentnodes | *Buffer* | If ethtxid/web3url not provided. Buffer value of the receipt merkle proof encoded in RLP format |

