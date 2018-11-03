import * as React from 'react';
import { getPasteShortcut } from '../utils';
import ClipboardContainer from '../components/ClipboardContainer';
import { getValue, setValue, STORAGE_KEY } from '../storage';
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
    getValue(STORAGE_KEY.RECENT).then((value) => {
      if (value) {
        this.setState({
          clipboardData: value,
        });
      }
    });
  }
  componentDidMount() {
    document.body.addEventListener('paste', this.pasteEventHandler);
  }
  componentWillUnmount() {
    document.body.removeEventListener('paste', this.pasteEventHandler);
  }
  pasteEventHandler(event: ClipboardEvent) {
    event.preventDefault();
    const data = event.clipboardData;
    const types = data.types;
    const details = types.map((type) => data.getData(type));
    if (types.length > 0) {
      setValue(STORAGE_KEY.RECENT, {
        types,
        details,
      });
    }
    this.setState({
      clipboardData: {
        types,
        details,
      },
    });
  }
  renderView() {
    const {clipboardData} = this.state;
    return (
      <div className="recent">
        <h1 className="title">详细内容</h1>
        <ClipboardContainer {...clipboardData} />
      </div>
    );
  }
  render() {
    const {clipboardData} = this.state;
    return (
      clipboardData.types.length === 0
        ? <div className="paste-tip">{getPasteShortcut()} 粘贴数据</div>
        : this.renderView()
    );
  }
};

export default RecentView;
