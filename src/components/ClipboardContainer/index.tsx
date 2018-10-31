import * as React from 'react';
import ContentContainer from '../ContentContainer';
import './index.less';

interface Property {
  types: string[];
  details: string[];
}

interface State {
  activeType: string;
}

const TYPE_ALL = 'all';

class ClipboardCollector extends React.Component {
  props: Property;
  state: State = {
    activeType: TYPE_ALL,
  }
  changeType(type: string) {
    this.setState({
      activeType: type,
    });
  }
  render() {
    const { types, details, } = this.props;
    const { activeType, } = this.state;
    const allTypes = [{ key: TYPE_ALL, name: '全部类型', }].concat(types.map(type => ({ key: type, name: type, })));
    return (
      <div>
        <ul className="type-selector">
          {
            allTypes.map(item => (
              <li key={item.key} 
                  onClick={() => this.changeType(item.key)}
                  className={item.key === activeType ? 'active' : ''}
              >
                {item.name}
              </li>
            ))
          }
        </ul>
        <ul className="container-list">
        {
          types.map((type, index) => {
            if (activeType !== TYPE_ALL && activeType !== type) {
              return null;
            }
            return (<li key={type}>
              <ContentContainer value={details[index] || ''} type={type} />
            </li>);
          })
        }
      </ul>
      </div>
    );
  }
};

export default ClipboardCollector;
