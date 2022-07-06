import React from 'react';
import DeleteButton from '../../components/DeleteButton';
import EditButton from '../../components/EditButton';
import ViewButton from '../../components/ViewButton';

const StudentRow = () => {
    const tableRowsData = ['1', 'Life is Beautiful', 'Montasim', 'Mamun', '05-07-2022', '08-07-2022'];

    return (
        <tr>
            {
                tableRowsData?.map(tableRowData =>
                    <td>{tableRowData}</td>)
            }
            <td className='flex gap-x-4'>
                <EditButton />
                <DeleteButton />
            </td>
        </tr>
    );
};

export default StudentRow;