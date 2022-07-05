import React from 'react';

const StudentRow = () => {
    const tableRowsData = ['1', 'Life is Beautiful', 'Montasim', 'Mamun', '05-07-2022', '08-07-2022'];

    return (
        <tr>
            {
                tableRowsData?.map(tableRowData =>
                    <td>{tableRowData}</td>)
            }
        </tr>
    );
};

export default StudentRow;