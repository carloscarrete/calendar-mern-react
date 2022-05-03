import moment from 'moment';
import {types} from '../types/types'

const initialState = {
    events: [
        {
            title: 'Llorar',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            user: {
              uid: 1,
              name: 'Carrete'
            }
          }
    ],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            return{
                ...state,
                events: [...state.events, action.payload]
            }
        case types.eventClear:
            return{
                ...state,
                activeEvent: null
            }
        default:
            return state;
    }
}