import React, {useState} from 'react';
import {Admin, Tabs} from "components";
import {DeleteOutlined} from "@ant-design/icons";

function Houses(props) {
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
                        title: "Index",
                        content: (
                            <div>
                                House
                            </div>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <DeleteOutlined/>,
                        onClick: () => handleDelete(),
                    }
                ]}
            />
        </Admin>

    );
}

export default Houses;