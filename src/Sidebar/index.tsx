import * as React from 'react';
import './index.less';

interface Property {
  items: SidebarItem[];
  activeItem: string;
  selectItem: (key: string) => void;
  isExpanded: boolean;
};

const Sidebar = (props: Property) => {
  const { items, activeItem, selectItem, isExpanded } = props;
  return (
    <section className={"sidebar" + (isExpanded ? '' : ' collapsed')}>
      <ul className="sidebar-list">
        {
          items.map((item: SidebarItem) => {
            return <li
              key={item.key}
              className={item.key === activeItem ? 'active' : ''}
              onClick={() => selectItem(item.key)}
              title={isExpanded ? '' : item.name}
            >{ isExpanded ? item.name : <span className={'iconfont ' + item.icon}></span>}</li>;
          })
        }
      </ul>
    </section>
  );
};

export default Sidebar;
