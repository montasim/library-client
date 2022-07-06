import React from 'react';
import DeleteButton from '../../components/DeleteButton';
import EditButton from '../../components/EditButton';
import Input from '../../components/Input';
import ModalCloseButton from '../../components/ModalCloseButton';
import NewButton from '../../components/NewButton';
import ViewButton from '../../components/ViewButton';

const StudentRow = () => {
    const tableRowsData = ['1', 'Montasim', 'Mamun'];

    return (
        <>
            <input type="checkbox" id="edit-student" class="modal-toggle" />
            <label for="edit-student" class="modal cursor-pointer">
                <label class="modal-box w-2/5 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'edit-student'} />

                    <h2 className='text-lg text-center font-bold'>Edit a Student</h2>

                    <div className='flex justify-between place-content-center mt-6'>
                        <Input title={'First Name'} />
                        <Input title={'Last Name'} />
                    </div>
                </label>
            </label>
            <tr>
                {
                    tableRowsData?.map(tableRowData =>
                        <td>{tableRowData}</td>)
                }
                <td className='flex gap-x-4'>
                    <EditButton modalId={'edit-student'} />
                    <DeleteButton />
                </td>
            </tr>
        </>
    );
};

export default StudentRow;