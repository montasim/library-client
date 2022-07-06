import React from 'react';
import Input from '../../components/Input';
import ModalCloseButton from '../../components/ModalCloseButton';
import NewButton from '../../components/NewButton';
import RefreshButton from '../../components/RefreshButton';
import StudentRow from './StudentRow';

const Students = () => {
    const tableHeadItems = ['SN', 'First Name', 'Last Name', 'Action'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section className='p-1'>
            <div className="flex justify-between mb-6">
                <NewButton modalId={'create-new-student'} />
                <RefreshButton />
            </div>

            <input type="checkbox" id="create-new-student" class="modal-toggle" />
            <label for="create-new-student" class="modal cursor-pointer">
                <label class="modal-box w-2/5 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'create-new-student'} />

                    <h2 className='text-lg text-center font-bold'>Add a New Student</h2>

                    <div className='flex justify-between place-content-center mt-6'>
                        <Input title={'First Name'} />
                        <Input title={'Last Name'} />
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