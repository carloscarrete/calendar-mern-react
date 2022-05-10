import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment';
import 'moment/locale/es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/messages-calendar-es'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClear, eventSetActive, eventStartLoading } from '../../actions/calendar';
import { AddNewFAB } from '../ui/AddNewFAB';
import { DeleteFAB } from '../ui/DeleteFAB';

moment.locale('es');

const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  
  const {uid} = useSelector(state=>state.auth);
  const {events, activeEvent} = useSelector(state =>state.calendar);

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch])
  

  const onDobleClick = (e) => {
    console.log('Abir modal');
    dispatch(uiOpenModal());
  }

  const onSelect = (e) => {
    dispatch(eventSetActive(e));
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {



    const style = {
      backgroundColor: (uid===event.user._id ) ? '#B800D1' : '#000000',
      borderRadius: '0px',
      display: 'block',
      opacity: 0.8,
      color: '#ffffff'
    }

    return { style };

  }

  const onSelectSlot = (e) =>  {
      dispatch(eventClear());
   }

  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onSelectSlot={onSelectSlot}
        onView={onViewChange}
        selectable={true}
        components={{
          event: CalendarEvent
        }}
        view={lastView}
      />

      <AddNewFAB />

      {activeEvent && (<DeleteFAB/>)}
      <CalendarModal />
      
    </div>
  )
}
