import React from 'react';
import BookRow from './BookRow';

const Students = () => {
    const tableHeadItems = ['SN', 'Book Name', 'Author', 'Borrowed By', 'Date of Borrow', 'Expected Date of Return'];

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
                    <BookRow />
                    <BookRow />
                    <BookRow />
                    <BookRow />
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