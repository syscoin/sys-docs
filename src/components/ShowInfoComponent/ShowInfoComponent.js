import React, { Component } from 'react';
import { Button } from 'primereact/button';
import TableComponent from '../TableComponent/TableComponent';
import ExampleComponent from '../ExampleComponent/ExampleComponent';
import './show-info.css';

class ShowInfoComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      paramTable: this.props.paramTable,
      returnTable: this.props.returnTable,
      typeTable: this.props.typeTable,
      examples: this.props.examples,
      //hash: location.hash,
      anchor: this.props.anchor,
      showTitles: this.props.showTitles,
      buttonShowText: 'ᐅ'
    }

    this.checkLocationHash = this.checkLocationHash.bind(this);
    this.renderParams = this.renderParams.bind(this);
    this.renderReturns = this.renderReturns.bind(this);
    this.renderExamples = this.renderExamples.bind(this);
    this.renderTypes = this.renderTypes.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    if (this.state.anchor !== undefined) {
      this.checkLocationHash();
    }
  }

  checkLocationHash() {
    if (typeof location !== 'undefined') {
      if (this.state.hash !== location.hash) {
        if (location.hash == this.props.anchor) {
          this.setState({showInfo: true, hash: location.hash, buttonShowText: 'ᐁ'})
        } else {
          this.setState({hash: location.hash})
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.state.anchor !== undefined) {
      this.checkLocationHash();
    }
  }

  renderTable(type, title, table) {
    if (this.state.showTitles !== false) {
      return (
        <div>
          <h4>{title}</h4>
          <TableComponent root={table} type={type}/>
        </div>
      )
    } else {
      return (
        <TableComponent root={table} type={type}/>
      )
    }
  }

  renderParams() {
    if (this.state.paramTable !== undefined) {
      return this.renderTable("param", "Parameters", this.state.paramTable)
    } else {
      return null;
    }
  }

  renderReturns() {
    if (this.state.returnTable !== undefined) {
      return this.renderTable("return", "Returns", this.state.returnTable)
    } else {
      return null;
    }
  }

  renderTypes() {
    if (this.state.typeTable !== undefined) {
      return this.renderTable("type", "Types", this.state.typeTable)
    } else {
      return null;
    }
  }

  renderExamples() {
    if (this.state.examples !== undefined) {
      if (this.state.showTitles !== false) {
        return (
          <div>
            <h4>Examples</h4>
            <ExampleComponent examples={this.state.examples} />
          </div>
        )
      } else {
        return (
          <ExampleComponent examples={this.state.examples} />
        )
      }
    } else {
      return null;
    }
  }

  toggleButton() {
    this.setState({ showInfo: !this.state.showInfo });

    if (this.state.showInfo) {
      this.state.buttonShowText = 'ᐅ'
    } else {
      this.state.buttonShowText = 'ᐁ'
    }
  }

  render() {
    if (this.state.showInfo) {
      return (
        <div>
          <button class="toggle-button" onClick={() => this.toggleButton() }>
            {this.state.buttonShowText}
          </button>
          {this.renderParams()}
          {this.renderReturns()}
          {this.renderExamples()}
          {this.renderTypes()}
        </div>
      )
    } else {
      return (
        <div>
          <button class="toggle-button" onClick={() => this.toggleButton() }>
            {this.state.buttonShowText}
          </button>
        </div>
      )
    }
  }
}

export default ShowInfoComponent;
