import {types} from '../types/types';

export const eventAddNew = (e) =>{
    return{
        type: types.eventAddNew,
        payload: e
    }
}

export const eventSetActive = (e) =>{
    return{
        type: types.eventSetActive,
        payload: e
    }
}

export const eventClear = () => ({type: types.eventClear});