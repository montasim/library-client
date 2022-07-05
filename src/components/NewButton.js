import React from 'react';
import { MdOutlineAddBox } from 'react-icons/md';

const NewButton = ({ modalId }) => {
    return (
        <label for={`${modalId}`} class="btn btn-outline btn-sm gap-x-2 modal-button">
            <MdOutlineAddBox className='text-lg' />
            New
        </label>
    );
};

export default NewButton;