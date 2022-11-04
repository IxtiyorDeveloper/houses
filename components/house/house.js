import StyledTable from "../table/table";
import {Button} from "antd";

const columns = [
    {
        title: 'Uy maydoni',
        dataIndex: 'area',
        key: 'area',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Qavati',
        dataIndex: 'floor',
        key: 'floor',
    },
    {
        title: 'Padez',
        dataIndex: 'padez',
        key: 'padez',
    },
    {
        title: 'To\'liq manzili',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Xonalar soni',
        dataIndex: 'rooms',
        key: 'rooms',
    },
    {
        title: '',
        dataIndex: 'del',
        key: 'del',
        render:() => {
            return(
                <Button type="danger">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'chirish
                </Button>
            )
        }
    },
    {
        title: '',
        dataIndex: 'add',
        key: 'add',
        render:() => {
            return(
                <Button type="primary">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Qo'shish
                </Button>
            )
        }
    },
    {
        title: '',
        dataIndex: 'upd',
        key: 'upd',
        render:() => {
            return(
                <Button type="default">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'zgartirish
                </Button>
            )
        }
    },
];
const data = [
    {
        key: '1',
        floor: '2',
        location: "Amir Temur 105 a uy",
        padez:"3",
        area: '120 m2',
        rooms:4
    },
    {
        key: '1',
        floor: '2',
        location: "Amir Temur 105 a uy",
        padez:"3",
        area: '120 m2',
        rooms:4
    },
    {
        key: '1',
        floor: '2',
        location: "Amir Temur 105 a uy",
        padez:"3",
        area: '120 m2',
        rooms:4
    },
];


function HousePage(props) {
    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default HousePage;
