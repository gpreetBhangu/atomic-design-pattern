import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import './App.css';

function App() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="timeGridFiveDay"
      weekends={false}
      events={[
        {
          title: 'Birmingham Comic Con',
          start: new Date('2021-08-17T09:00'),
          end: new Date('2021-08-17T19:00'),
          id: '1',
          isMultipleDay: true,
          multipleDayEvents: [
            {
              start: new Date('2014-11-12T09:00'),
              end: new Date('2014-11-15T19:00'),
              description: 'Day 1',
            },
            {
              start: new Date('2014-11-16T09:00'),
              end: new Date('2014-11-18T19:00'),
              description: 'Day 2',
            },
            {
              start: new Date('2014-11-02T09:00'),
              end: new Date('2014-11-05T19:00'),
              description: 'Day 3',
            },
          ],
        },
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
      views={{
        timeGridFiveDay: {
          type: 'timeGrid',
          duration: { days: 5 },
          buttonText: '5 day',
        },
      }}
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
