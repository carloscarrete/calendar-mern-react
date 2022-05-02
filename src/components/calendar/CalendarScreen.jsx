import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'


import moment from 'moment';
import 'moment/locale/es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/messages-calendar-es'
import { CalendarEvent } from './CalendarEvent';

moment.locale('es');

const localizer = momentLocalizer(moment)

const events = [{
  title: 'Llorar',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  user: {
    uid: 1,
    name: 'Carrete'
  }
}]

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const onDobleClick = (e) => {
    console.log(e);
  }

  const onSelect = (e) => {
    console.log(e);
  }

  const onViewChange = (e) =>  {
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
        view= {lastView}
      />
    </div>
  )
}
