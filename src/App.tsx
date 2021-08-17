import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import './App.css';

function App() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={[
        { title: 'event 1', date: '2021-08-17', time: '08:00', isTime: true },
        { title: 'event 2', date: '2021-08-18', time: '08:00', isTime: true },
        { title: 'event 3', date: '2021-08-19', time: '09:00' },
        { title: 'event 4', date: '2021-08-20', time: '10:00' },
      ]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      select={() => alert('Event Selected')}
      eventContent={renderEventContent}
      eventClick={() => alert('You have clicked on event')}
    />
  );
}

function renderEventContent(eventInfo: any) {
  if (eventInfo.event.isTime) {
    return <div>TIME {eventInfo.event.time}</div>;
  }

  return (
    <div className=" bg-red-700">
      <p>Hello this is testing </p>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <button onClick={() => eventInfo.eventClick()}>Close</button>
    </div>
  );
}

export default App;
