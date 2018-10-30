import * as React from 'react';
import { getPasteShortcut } from '../utils';
import ClipboardCollector from '../ClipboardCollector';
import './index.less';

interface ClipboardData {
  types: string[];
  details: string[];
};

interface State {
  clipboardData: ClipboardData;
};

interface Property {};

class RecentView extends React.Component {
  state: State = {
    clipboardData: {
      types: [],
      details: [],
    },
  }
  constructor(props: Property) {
    super(props);
    this.pasteEventHandler = this.pasteEventHandler.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('paste', this.pasteEventHandler);
  }
  pasteEventHandler(event: ClipboardEvent) {
    event.preventDefault();
    const data = event.clipboardData;
    const types = data.types;
    const details = types.map((type) => data.getData(type));
    this.setState({
      clipboardData: {
        types,
        details,
      },
    });
  }
  componentWillUnmount() {
    document.body.removeEventListener('paste', this.pasteEventHandler);
  }
  render() {
    const {clipboardData} = this.state;
    return (
      clipboardData.types.length === 0
        ? <section className="paste-tip">{getPasteShortcut()} 粘贴数据</section>
        : <ClipboardCollector {...clipboardData} />
    );
  }
};

export default RecentView;
