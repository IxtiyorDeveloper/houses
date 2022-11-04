import StyledTable from "../table/table";
import {Button} from "antd";

const columns = [
    {
        title: 'Nomi',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Manzil',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Maydoni',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Padezlar soni',
        dataIndex: 'padez',
        key: 'padez',
    },
    {
        title: 'Umumiy xonalar soni',
        dataIndex: 'rooms',
        key: 'rooms',
    },
    {
        title: 'Bir xonalilar soni',
        dataIndex: 'one',
        key: 'one',
    },
    {
        title: 'Ikki xonalilar soni',
        dataIndex: 'two',
        key: 'two',
    },
    {
        title: 'Uch xonalilar soni',
        dataIndex: 'three',
        key: 'three',
    },
    {
        title: 'To\'rt xonalilar soni',
        dataIndex: 'four',
        key: 'four',
    },
    {
        title: 'Besh xonalilar soni',
        dataIndex: 'five',
        key: 'five',
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
        name: 'Darxon',
        location: "Amir Temur 105 a uy",
        area: '120 m2',
        padez: "5",
        rooms: "400",
        one: "30",
        two: "130",
        three: "100",
        four: "60",
        five: "40",
    },
    {
        key: '1',
        name: 'Darxon',
        location: "Amir Temur 105 a uy",
        area: '120 m2',
        padez: "5",
        rooms: "400",
        one: "30",
        two: "130",
        three: "100",
        four: "60",
        five: "40",
    },
    {
        key: '1',
        name: 'Darxon',
        location: "Amir Temur 105 a uy",
        area: '120 m2',
        padez: "5",
        rooms: "400",
        one: "30",
        two: "130",
        three: "100",
        four: "60",
        five: "40",
    },
];


function ObjectPage(props) {
    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default ObjectPage;
