import React, {useState} from 'react';
import {Admin, Tabs,ObjectPage} from "components";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";

function Object(props) {
    const [index, setIndex] = useState(0)

    const handleDelete = () => {

    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Obyektlar",
                        content: (
                            <div>
                                <ObjectPage/>
                            </div>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined />,
                        onClick: () => handleDelete(),
                    },
                ]}
            />
        </Admin>

    );
}

export default Object;
