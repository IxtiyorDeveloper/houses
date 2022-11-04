import { Tabs as AntTabs } from "antd"

import { Wrapper, Icon, RelativeParent } from "./tabs.e"

const Tabs = ({ tabs, index, tabRightContent, setIndex }) => {
  const OperationsSlot = {
    right: tabRightContent?.map((rightTab, index) => (
      <RelativeParent key={index}>
        <Icon key={index} onClick={() => rightTab?.onClick?.()}>
          {rightTab.icon}
        </Icon>
      </RelativeParent>
    )),
  }
  return (
    <Wrapper>
      <AntTabs
        animated
        activeKey={index.toString()}
        onChange={(key) => setIndex(parseInt(key))}
        tabBarExtraContent={OperationsSlot}
      >
        {tabs.map((tab, index) => (
          <AntTabs.TabPane tab={tab.title} key={index}>
            {tab.content}
          </AntTabs.TabPane>
        ))}
      </AntTabs>
    </Wrapper>
  )
}

export default Tabs
