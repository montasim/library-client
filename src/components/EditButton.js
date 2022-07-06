import React from 'react';
import { BiEdit } from 'react-icons/bi';

const EditButton = ({ modalId }) => {
    return (
        <label for={`${modalId}`} class="btn btn-circle bg-indigo-200 text-indigo-500 border-none btn-sm modal-button">
            <BiEdit className='text-lg' />
        </label>
    );
};

export default EditButton;