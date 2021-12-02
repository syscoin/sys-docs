import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ReactMarkdown from 'react-markdown';
import { PrimeIcons } from 'primereact/api';
import './table-comp.css';

const paramColHeaders = ['Name', 'Type', 'Description', 'Required'];
const returnColHeaders = ['Key', 'Type', 'Description'];
const typeColHeaders = ['Key', 'Type', 'Description'];

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: this.props.root,
            tableType: this.props.type,
            expandedKeys: {}
        };
        this.renderParam = this.renderParam.bind(this);
        this.renderParams = this.renderParams.bind(this);
        this.getParamElement = this.getParamElement.bind(this);
    }

    getParamElement(param) {
      let paramName = `**\`${param.data.name}\`**`;

      let requiredStr = "";
      if (param.data.required === " yes") {
        requiredStr = `Required`;
      }

      if ((this.state.tableType === 'param' || this.state.tableType === 'type' || this.state.tableType === 'return') && param.data.name) {
        return (
          <li class="li-param">
            <div class="flex short">
              <ReactMarkdown class="md-type" children={paramName} />
              <p class="required">
                {requiredStr}
              </p>
            </div>
          </li>
        )
      } else {
        return null;
      }
    }

    renderParam(param) {
      let typeStr = `${param.data.type}`;

      if (param.children) {
        return (
          <div class="md-type">
            {this.getParamElement(param)}
            <ul class="ul-param">
              <li class="li-param">
                <details class="short-spacing">
                  <summary>
                    <div>
                      <ReactMarkdown class="md-type" children={typeStr} />
                      <ReactMarkdown class="md-type" children={param.data.description} />
                    </div>
                  </summary>
                  {this.renderParams(param.children)}
                </details>
              </li>
            </ul>
          </div>
        )
      } else {
        return (
          <div class="md-type">
            {this.getParamElement(param)}
            <ul class="ul-param">
              <li class="li-param">
                <div class="short-spacing">
                  <ReactMarkdown class="md-type" children={typeStr} />
                  <ReactMarkdown class="md-type" children={param.data.description} />
                </div>
              </li>
            </ul>
          </div>
        )
      }
    }

    renderParams(params) {
      return (
        <ul class="ul-param md-type">
          {params.map(param => {
            return (
              this.renderParam(param)
            )
          })}
        </ul>
      )
    }

    render() {
      if (this.state.nodes != undefined) {
        return (
          <div>
            {this.renderParams(this.state.nodes)}
          </div>
        )
      } else {
        return null;
      }
    }
}

export default TableComponent;
