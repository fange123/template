import 'rc-tabs/assets/index.css';
import React, { useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

interface IProps {}

const MyButtonTab: React.FC<IProps> = () => {
  const [activeKey, setActiveKey] = useState<string>('');

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const onPrevClick = (e: Event): void => {
    console.log(e);
  };

  const onNextClick = (e: Event): void => {
    console.log(e);
  };

  return (
    <Tabs
      activeKey={activeKey}
      tabBarPosition="top"
      renderTabBar={() => (
        <ScrollableInkTabBar
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      )}
      renderTabContent={() => <TabContent />}
      onChange={onChange}
    >
      {[...Array.from({ length: 11 }, (_, i) => i)].map(i => (
        <TabPane tab={`Tab-${i}`} key={i}>
          Content of tab {i}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default MyButtonTab;
