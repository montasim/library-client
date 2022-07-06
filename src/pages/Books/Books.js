import React from 'react';
import Input from '../../components/Input';
import ModalCloseButton from '../../components/ModalCloseButton';
import NewButton from '../../components/NewButton';
import RefreshButton from '../../components/RefreshButton';
import BookRow from './BookRow';

const Students = () => {
    const tableHeadItems = ['SN', 'Book Name', 'Author', 'Borrowed By', 'Date of Borrow', 'Expected Date of Return', 'Action'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section className='p-1'>
            <div className="flex justify-between mb-6">
                <NewButton modalId={'add-new-book'} />
                <RefreshButton />
            </div>

            <input type="checkbox" id="add-new-book" class="modal-toggle" />
            <label for="add-new-book" class="modal cursor-pointer">
                <label class="modal-box w-2/5 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'add-new-book'} />

                    <h2 className='text-lg text-center font-bold'>Add a New Book</h2>

                    <div className='flex justify-between place-content-center mt-6'>
                        <Input title={'Book Name'} />
                        <Input title={'Author'} />
                    </div>
                </label>
            </label>

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