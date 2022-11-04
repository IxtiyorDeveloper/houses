import StyledTable from "../table/table";
import {Button} from "antd";

const columns = [
    {
        title: 'Umumiy qarzdorlar soni',
        dataIndex: 'debts',
        key: 'debts',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Foiz qarzdorligi',
        dataIndex: 'per_debts',
        key: 'per_debts',
    },
    {
        title: 'Xonalar soni',
        dataIndex: 'rooms',
        key: 'rooms',
    },
    {
        title: 'Kreditga olingan xonadonning kvadrati',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Xonadan topshiradigan yili',
        dataIndex: 'year',
        key: 'year',
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
        per_debts: '2',
        location: "Amir Temur 105 a uy",
        debts:"3",
        area: '120 m2',
        rooms:4,
        year:2020
    },
    {
        key: '1',
        per_debts: '2',
        location: "Amir Temur 105 a uy",
        debts:"3",
        area: '120 m2',
        rooms:4,
        year:2020
    },
    {
        key: '1',
        per_debts: '2',
        location: "Amir Temur 105 a uy",
        debts:"3",
        area: '120 m2',
        rooms:4,
        year:2020
    },

];


function DebtPage(props) {
    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default DebtPage;
