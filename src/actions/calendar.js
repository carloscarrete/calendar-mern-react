import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { prepareEvent } from '../helpers/prepareEvent';
import {types} from '../types/types';

export const eventStartAddNew = (event) =>{
    return async (dispatch, getState) =>{

        const {uid, name} = getState().auth;

        try{
            const res = await fetchWithToken('events', event, 'POST');
            const body = await res.json();
            if(body.ok){
                event._id = body.msg._id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch(eventAddNew(event));
            }
        }catch(error){
            console.log(error);
        }
        
    }
}

const eventAddNew = (e) =>{
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

export const eventStartUpdate = (event) =>{
    return  async(dispatch) =>{

        try{
            const res = await fetchWithToken(`events/${event._id}`, event, 'PUT');
            const body = await res.json();

            if(body.ok){
                dispatch(eventUpdated(event));
            }else{
                Swal.fire('Error', body.msg, 'error');
            }

        }catch(error){
            console.log(error);
        } 
    }
}

const eventUpdated = (event) =>{
    return {
        type: types.eventUpdate,
        payload: event
    }
}

export const eventStartDelete = () =>{
    return async (dispatch, getState)=>{

            const id = getState().calendar.activeEvent._id;
               try{
            const res = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const body = await res.json();

             if(body.ok){
                dispatch(eventDelete());
                Swal.fire({
                    icon: 'success',
                    title: 'El evento se ha confirmado con exito',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }else{
                Swal.fire('Error', body.msg, 'error');
            } 

        }catch(error){
            console.log(error);
        }    
    }
}

const eventDelete = () => ({type: types.eventDelete});

export const eventStartLoading = () =>{
    return async (dispatch) =>{
        try{    
            const res = await fetchWithToken('events');
            const body = await res.json();

            const events = prepareEvent(body.evento);

            dispatch(eventLoaded(events));
        }catch(error){
            console.log(error);
        }
    }
}

const eventLoaded = (events) =>{
    return {
        type: types.eventLoaded,
        payload: events
    }
}

export const eventLogout = () => {
    return {
        type: types.eventLogout
    }
}