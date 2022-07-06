import React from 'react';
import DeleteButton from '../../components/DeleteButton';
import EditButton from '../../components/EditButton';
import Input from '../../components/Input';
import ModalCloseButton from '../../components/ModalCloseButton';
import ViewButton from '../../components/ViewButton';

const StudentRow = () => {
    const tableRowsData = ['1', 'Life is Beautiful', 'Montasim', 'Mamun', '05-07-2022', '08-07-2022'];

    return (
        <>
            <input type="checkbox" id="edit-book" class="modal-toggle" />
            <label for="edit-book" class="modal cursor-pointer">
                <label class="modal-box w-2/5 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'edit-book'} />

                    <h2 className='text-lg text-center font-bold'>Edit A Book</h2>

                    <div className='flex justify-between place-content-center mt-6'>
                        <Input title={'Book Name'} />
                        <Input title={'Author'} />
                    </div>
                </label>
            </label>
            <tr>
                {
                    tableRowsData?.map(tableRowData =>
                        <td>{tableRowData}</td>)
                }
                <td className='flex gap-x-4'>
                    <EditButton modalId={'edit-book'} />
                    <DeleteButton />
                </td>
            </tr>
        </>
    );
};

export default StudentRow;