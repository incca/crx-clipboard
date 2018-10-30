import * as React from "react";
import Sidebar from './Sidebar';
import ClipboardCollector from './ClipboardCollector';
import RecentView from './RecentView';
import './app.less';

interface State {
  sidebarItems: SidebarItem[];
  activeItem: string;
};

class App extends React.Component {
  state: State = {
    sidebarItems: [
      {name: '最近数据', key: 'recent'},
      {name: '历史管理', key: 'history'}
    ],
    activeItem: 'recent',
  };
  setActiveItem(item: string) {
    if (this.state.activeItem === item) {
      return;
    }
    this.setState({
      activeItem: item
    });
  }

  getView(activeItem: string) {
    switch(activeItem) {
      case 'recent': return (<RecentView />);
      default: return <label className="developing-tip">该功能正在开发</label>;
    }
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
        <section className="view-container">{this.getView(activeItem)}</section>
      </React.Fragment>
    );
  }
};

export default App;
