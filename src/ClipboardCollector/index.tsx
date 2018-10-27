import * as React from 'react';
import './index.less';
import { number } from 'prop-types';

interface State {
  types: string[];
  details: string[];
}

class ClipboardCollector extends React.Component {
  state: State = {
    types: [],
    details: [],
  }
  componentDidMount() {
    document.body.addEventListener('paste', this.pasteEventHandler.bind(this));
  }
  pasteEventHandler(event: ClipboardEvent) {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const types = clipboardData.types;
    const details = types.map((type) => clipboardData.getData(type));
    this.setState({
      types,
      details,
    });
  }
  render() {
    const { types, details } = this.state;
    return (
      <React.Fragment>
        <div id="clipboard-collector" contentEditable={true}></div>
        <ul id="clipboard-types">
          {
            types.map((type, index) => (
              <li key={type}>
                {type}
                <pre className={'clipboard-content'}> {details[index] || ''} </pre>
              </li>
            ))
          }
        </ul>
      </React.Fragment>
    );
  }
};

export default ClipboardCollector;
