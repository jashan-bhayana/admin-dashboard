// src/components/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      events={[
        { title: 'event 1', date: '2023-06-01' },
        { title: 'event 2', date: '2023-06-02' },
      ]}
    />
  );
};

export default Calendar;
