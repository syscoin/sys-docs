import React, { Component, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const source = '```eval-js console.log("hello world")```'

class RunkitComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: this.props.source,
            script: null
        };

        useEffect(() => {
          this.state.script.plugin.init(klipse.run.plugin_prod.plugin.settings());
        })

    }

    componentDidMount() {

      const link = document.createElement("link");
      link.src = "https://storage.googleapis.com/app.klipse.tech/css/codemirror.css";
      link.async = true;
      link.type = "text/css"
      link.rel = "stylesheet"
      document.head.appendChild(link);

      window.klipse_settings = {
        selector_eval_js: '.language-klipse-eval-js', // css selector for the html elements you want to klipsify
      };

      const script = document.createElement("script");
      script.src = "https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js";
      script.async = true;
      document.body.appendChild(script);
      this.state.script = script;
      this.state.source = source;
    }

    render() {
        return "```eval-js console.log(\"hello world\")```"

      }
}

export default RunkitComponent;
