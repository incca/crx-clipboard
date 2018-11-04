import * as React from "react";
import Sidebar from './Sidebar';
import RecentView from './RecentView';
import { getValue, setValue, STORAGE_KEY } from './storage';
import './app.less';

interface State {
  sidebarItems: SidebarItem[];
  activeItem: string;
  setting: AppSetting;
};

class App extends React.Component {
  state: State = {
    sidebarItems: [
      {name: '最近数据', key: 'recent', icon: 'icon-zhunbeiliangchan'},
      {name: '历史管理', key: 'history', icon: 'icon-icon_renwujincheng'},
    ],
    activeItem: 'recent',
    setting: {
      isExpanded: true,
    },
  };
  constructor(props: any) {
    super(props);
    getValue(STORAGE_KEY.SETTING).then((setting: AppSetting) => {
      if (setting) {
        this.setState({
          setting,
        });
      }
    });
  }
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
    const { setting } = this.state;
    setting.isExpanded = !setting.isExpanded;
    this.setState({
      setting,
    });
    setValue(STORAGE_KEY.SETTING, setting);
  }
  render() {
    const { sidebarItems, activeItem, setting } = this.state;
    const { isExpanded } = setting;
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
