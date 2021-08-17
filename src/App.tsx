import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import './App.css';
import { Button, BUTTON_COLOR } from './atoms';

function App() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="timeGridFiveDay"
      weekends={false}
      dayHeaders={true}
      events={[
        { title: 'Hotel One', date: '2021-08-17', allDay: true, color: 'transprent' },
        { title: 'Hotel Two', date: '2021-08-18', allDay: true, color: 'blue' },
        { title: 'Hotel Three', date: '2021-08-19', allDay: true, color: 'blue' },
        { title: 'Hotel Four', date: '2021-08-20', allDay: true, color: 'blue' },
        {
          title: 'Birmingham Comic Con',
          start: new Date('2021-08-17T09:00'),
          end: new Date('2021-08-17T10:00'),
        },
        { title: 'event 1', start: new Date('2021-08-17T06:00'), end: new Date('2021-08-17T8:00'), isTime: true },
        { title: 'event 2', start: new Date('2021-08-18T09:00'), end: new Date('2021-08-18T11:00'), isTime: true },
        { title: 'event 3', start: new Date('2021-08-19T10:00'), end: new Date('2021-08-19T12:00') },
        { title: 'event 4', start: new Date('2021-08-20T11:00'), end: new Date('2021-08-20T16:00') },
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
  if (eventInfo.event.allDay) {
    return (
      <div style={{ height: 120, width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div>{eventInfo.event.date}</div>
        <Button color={BUTTON_COLOR.PRIMARY} type="contained">
          {eventInfo.event.title}
        </Button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: eventInfo.color, height: 120, width: 145 }}>
      <i>{eventInfo.event.title}</i>
      <b>{eventInfo.timeText}</b>
      <button onClick={() => eventInfo.eventClick()}>Close</button>
    </div>
  );
}

export default App;
