import React from 'react';

const Input = ({ title = 'Input Field' }) => {
    return (
        <div>
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <input type="text" placeholder={title} class="input input-xs input-bordered" />
        </div>
    );
};

export default Input;