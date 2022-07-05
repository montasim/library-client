import React from 'react';

const StudentRow = () => {
    const tableRowsData = ['1', 'Montasim', 'Mamun'];

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