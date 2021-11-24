import React, { Component } from 'react';
//import { TabView, TabPanel } from 'primereact/tabview';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';
import assetBurnToEth from '../../../src/examples-code/assetBurnToEth';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'react-tabs/style/react-tabs.css';
import './example.css';
// coldarkCold - light, coldarkDark - dark

// TODO: change the code style based on whether the light or dark theme is set
const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={coldarkDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    )
  }
}

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: this.props.examples,
            selectedIndex: 0
        };
    }

    render() {
      if (this.state.examples && this.state.examples.length > 0) {
        if (this.state.examples.length > 1) {
          return (
            <Tabs selectedIndex={this.state.selectedIndex} onSelect={selectedIndex => this.setState({ selectedIndex })}>
              <TabList>
                {this.state.examples.map((tab, i) => (
                  <Tab key={i} label={i}>
                    Example {i + 1}
                  </Tab>
                ))}
              </TabList>
              {this.state.examples.map((tab, i) => (
                <TabPanel key={i}>
                  <ReactMarkdown components={components} children={tab} />
                </TabPanel>))
              }
            </Tabs>
          )
        } else {
          return (
            this.state.examples.map((tab, i) => (
              <ReactMarkdown key={i} components={components} children={tab} />
            ))
          )
        }
      } else {
        return null;
      }
    }
}

export default ExampleComponent;
