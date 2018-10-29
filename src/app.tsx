import * as React from "react";
import Sidebar from './Sidebar';
import ClipboardCollector from './ClipboardCollector';
import './app.less';

interface State {
  sidebarItems: SidebarItem[];
  activeItem: string;
};

class App extends React.Component {
  state: State = {
    sidebarItems: [
      {name: '最近数据', key: 'detail'},
      {name: '历史管理', key: 'history'}
    ],
    activeItem: 'detail',
  };
  setActiveItem(item: string) {
    if (this.state.activeItem === item) {
      return;
    }
    this.setState({
      activeItem: item
    });
  }
  render() {
    const { sidebarItems, activeItem } = this.state;
    return (
      <React.Fragment>
        <Sidebar 
          items={sidebarItems}
          selectItem={this.setActiveItem.bind(this)}
          activeItem={activeItem}
        />
        <ClipboardCollector />
      </React.Fragment>
    );
  }
};

export default App;
