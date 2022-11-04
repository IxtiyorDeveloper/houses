import React, {useState} from 'react';
import {Admin, Tabs, DebtPage} from "components";
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
                                <DebtPage/>
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
