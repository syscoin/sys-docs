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
      chainName: 'Syscoin',
      iconUrls: ['https://syscoin.org/images/syscoin-blue-flat-logo.svg'],
      nativeCurrency: {
        name: 'Syscoin',
        symbol: 'SYS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ankr.com/syscoin', 'wss://rpc.syscoin.org/wss'],
      blockExplorerUrls: ['https://explorer.syscoin.org']
    }

    const testnet = {
      chainId: '0x' + (5700).toString(16),
      chainName: 'Syscoin Tanenbaum',
      iconUrls: ['https://syscoin.org/images/syscoin-blue-flat-logo.svg'],
      nativeCurrency: {
        name: 'Testnet Syscoin',
        symbol: 'TSYS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.tanenbaum.io/'],
      blockExplorerUrls: ['https://tanenbaum.io/']
    }

    const rollux_optimistic_testnet = {
      chainId: '0x' + (57000).toString(16),
      chainName: 'Rollux Testnet',
      iconUrls: [''],
      nativeCurrency: {
        name: 'Testnet Syscoin',
        symbol: 'TSYS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-tanenbaum.rollux.com'],
      blockExplorerUrls: ['https://rollux.tanenbaum.io/']
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
          break;
        case 'Rollux Optimistic Testnet':
            req = {
              method: 'wallet_addEthereumChain',
              params: [rollux_optimistic_testnet, this.state.selectedAddress]
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
