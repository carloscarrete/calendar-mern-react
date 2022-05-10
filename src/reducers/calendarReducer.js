import {types} from '../types/types'

const initialState = {
    events: [
/*         {
            id: new Date().getTime(),
            title: 'Llorar',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            user: {
              uid: 1,
              name: 'Carrete'
            }
          } */
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
        case types.eventUpdate:
            return{
                ...state,
                events: state.events.map(e=>e._id===action.payload._id ? action.payload : e)
            }
        case types.eventDelete:
            return{
                ...state,
                events: state.events.filter(e=>e.id!==state.activeEvent.id),
                activeEvent: null
            }
        case types.eventLoaded:
            return{
                ...state,
                events: [...action.payload]
            }
        default:
            return state;
    }
}