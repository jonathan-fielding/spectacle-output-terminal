// Import React
import React from 'react';

require('./spectacle-output-terminal.css');

export default class Presentation extends React.Component {
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="terminal">
        <header className="terminal__header">
          <span className="terminal__buttons">
            <span className="terminal__button--red" />
            <span className="terminal__button--amber" />
            <span className="terminal__button--green" />
          </span>
          Node.js
          <span className="terminal__actions">
            {/* <button className="terminal__action--visualise" onClick={this.props.onVisualise}>Visualise</button> */}
            <button
              className={`terminal__action--run ${
                this.props.codeRunning === true
                  ? 'terminal__action--run--active'
                  : ''
              }`}
              onClick={this.props.onRun}
            >
              Run
            </button>
            <button
              className="terminal__action--stop"
              onClick={this.props.onStop}
            >
              Stop
            </button>
          </span>
        </header>
        <div className="terminal__body">
          <pre>
            {this.props.content &&
              this.props.content.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </pre>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          />
        </div>
      </div>
    );
  }
}
