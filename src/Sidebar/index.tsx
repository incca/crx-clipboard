import * as React from 'react';
import './index.less';

interface Property {
  items: SidebarItem[];
  activeItem: string;
  selectItem: (key: string) => void;
};

const Sidebar = (props: Property) => {
  const { items, activeItem, selectItem } = props;
  return (
    <section className="sidebar">
      <ul className="sidebar-list">
        {
          items.map((item: SidebarItem) => {
            return <li
              key={item.key}
              className={item.key === activeItem ? 'active' : ''}
              onClick={() => selectItem(item.key)}
            >{item.name}</li>;
          })
        }
      </ul>
    </section>
  );
};

export default Sidebar;
