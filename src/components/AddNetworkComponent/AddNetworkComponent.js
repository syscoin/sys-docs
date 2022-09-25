const Ethers = require('ethers');

import React, { Component } from 'react';
import './add.css';

class AddNetworkComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: null,
      added: false,
      network: this.props.network,
      window: null
    }

    this.connectWallet = this.connectWallet.bind(this);
  }

  componentDidMount() {
    if (window.ethereum) {
      this.setState({address: window.ethereum.selectedAddress});
    }
  }

  async connectWallet() {

    const mainnet = {
      chainId: '0x' + (57).toString(16),
      chainName: 'Syscoin Mainnet',
      iconUrls: ['https://syscoin.org/images/syscoin-blue-flat-logo.svg'],
      nativeCurrency: {
        name: 'Syscoin',
        symbol: 'SYS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.syscoin.org/', 'wss://rpc.syscoin.org/wss'],
      blockExplorerUrls: ['https://explorer.syscoin.org']
    }

    const testnet = {
      chainId: '0x' + (5700).toString(16),
      chainName: 'Syscoin Tanenbaum Testnet',
      iconUrls: ['https://syscoin.org/images/syscoin-blue-flat-logo.svg'],
      nativeCurrency: {
        name: 'Test Syscoin',
        symbol: 'tSYS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.tanenbaum.io/'],
      blockExplorerUrls: ['https://tanenbaum.io/']
    }

    const OPv1_testnet = {
      chainId: '0x' + (2814).toString(16),
      chainName: 'Rollux OPv1 Testnet',
      iconUrls: ['https://syscoin.org/images/rollux-blue-flat-logo.svg'],
      nativeCurrency: {
        name: 'Rollux Syscoin',
        symbol: 'rSYS',
        decimals: 18,
      },
      rpcUrls: ['https://testnet.rollux.com:2814/'],
      blockExplorerUrls: ['https://explorer.testnet.rollux.com/']
    }

    if (window.ethereum) {
      // request connecting to wallet
      await window.ethereum.send('eth_requestAccounts');

      var req;
      switch (this.state.network) {
        case 'Mainnet':
          req = {
            method: 'wallet_addEthereumChain',
            params: [mainnet, this.state.selectedAddress]
          }
          break;
        case 'Tanenbaum Testnet':
          req = {
            method: 'wallet_addEthereumChain',
            params: [testnet, this.state.selectedAddress]
          }
          case 'Rollux OPv1 Testnet':
            req = {
              method: 'wallet_addEthereumChain',
              params: [OPv1_testnet, this.state.selectedAddress]
            }
        default:
          break;
      }

      try {
        // request to add chain
        await window.ethereum.request(req)
      } catch (error) {
        console.log(error);
        return false;
      }
      this.setState({added: true});
      return true;
    }
  }

  render() {

    if (!this.state.added) {
      return (
          <section className="section">
            <button onClick={this.connectWallet} className="addButton">
              Add to MetaMask
            </button>
          </section>
      );
    } else {
      return (
          <section className="section">
            <button className="addButton">
              Added
            </button>
          </section>
      );
    }
  }
}

export default AddNetworkComponent;
