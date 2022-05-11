import React from 'react'
import { useDispatch } from 'react-redux'
import { eventStartDelete } from '../../actions/calendar';

export const DeleteFAB = () => {

    const dipatch = useDispatch();

    const handleDelete = () =>{
        dipatch(eventStartDelete());
    }

    return (
        <div>
            <button className='btn btn-danger fab-delete' onClick={handleDelete}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}
