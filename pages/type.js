import React, {useState} from 'react';
import {Admin, Tabs} from "components";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";

function Debt(props) {
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
                        title: "Qarzdorlar",
                        content: (
                            <div>
                                Tur
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

export default Debt;
