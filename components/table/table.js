import {Table} from 'antd';

function StyledTable({columns,data}) {
    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default StyledTable;
