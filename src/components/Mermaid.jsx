import React from "react";
import mermaid from "mermaid";
import './Mermaid.css'

mermaid.initialize({
//   startOnLoad: true,
    theme: "base",
    securityLevel: "loose",
    themeVariables: {
        primaryColor: '#fff',
        primaryTextColor: '#000',
        primaryBorderColor: '#000',
        lineColor: '#fff',
        tertiaryTextColor: '#444',
    },
    gantt: {
        fontSize: 24,
        barHeight: 42,
        barGap: 8,
        gridLineStartPadding: 45,
        leftPadding: 30,
        displayMode: "compact"
    }
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}
