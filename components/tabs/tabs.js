import {Tabs as AntTabs,Input} from "antd"

import {Icon, RelativeParent, Wrapper} from "./tabs.e"

const Tabs = ({tabs, index, tabRightContent, setIndex}) => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
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
            <div className="w50">
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
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
