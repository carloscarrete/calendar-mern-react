import React, { useState } from 'react'
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
import { eventSetActive } from '../../actions/calendar';
import { AddNewFAB } from '../ui/AddNewFAB';

moment.locale('es');

const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const {events} = useSelector(state =>state.calendar);

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

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
      backgroundColor: '#000000',
      borderRadius: '0px',
      display: 'block',
      opacity: 0.8,
      color: '#ffffff'
    }

    return { style };

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
        onView={onViewChange}
        components={{
          event: CalendarEvent
        }}
        view={lastView}
      />

      <AddNewFAB />

      <CalendarModal />
    </div>
  )
}
