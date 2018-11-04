import * as React from "react";
import Sidebar from './Sidebar';
import RecentView from './RecentView';
import './app.less';

interface State {
  sidebarItems: SidebarItem[];
  activeItem: string;
  isExpanded: boolean;
};

class App extends React.Component {
  state: State = {
    sidebarItems: [
      {name: '最近数据', key: 'recent'},
      {name: '历史管理', key: 'history'}
    ],
    activeItem: 'recent',
    isExpanded: true,
  };
  getView(activeItem: string) {
    switch(activeItem) {
      case 'recent': return (<RecentView />);
      default: return <label className="developing-tip">该功能正在开发</label>;
    }
  }
  setActiveItem(item: string) {
    if (this.state.activeItem === item) {
      return;
    }
    this.setState({
      activeItem: item
    });
  }
  toggleExpended() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  render() {
    const { sidebarItems, activeItem, isExpanded } = this.state;
    return (
      <React.Fragment>
        <Sidebar 
          items={sidebarItems}
          selectItem={this.setActiveItem.bind(this)}
          activeItem={activeItem}
          isExpanded={isExpanded}
        />
        <i
          className={"iconfont icon-xiangshangzhanhang view-switch-btn" + (isExpanded ? '' : ' to-expand')}
          title={isExpanded ? '点此收起' : '点此展开'}
          onClick={this.toggleExpended.bind(this)}
        ></i>
        <section className={"view-container" + (isExpanded ? '' : ' expanded')}>{this.getView(activeItem)}</section>
      </React.Fragment>
    );
  }
};

export default App;
