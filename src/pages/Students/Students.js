import React from 'react';
import StudentRow from './StudentRow';

const Students = () => {
    const tableHeadItems = ['SN', 'First Name', 'Last Name'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section className='p-1'>
            <table class="table table-zebra table-compact">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                </tbody>
                <tfoot>
                    {
                        tableHead
                    }
                </tfoot>
            </table>
        </section >
    );
};

export default Students;