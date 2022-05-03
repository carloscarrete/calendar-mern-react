import React from 'react'
import {useDispatch} from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewFAB = () => {

  const dispatch = useDispatch();

  const handleClickNew = () =>  {
    dispatch(uiOpenModal());
   }

  return (
    <button className='btn btn-warning fab' onClick={handleClickNew}>
        <i className='fas fa-plus'></i>
    </button>
  )
}
