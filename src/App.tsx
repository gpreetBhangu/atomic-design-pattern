import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';

function App() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: 'event 1', date: '2021-08-17' },
        { title: 'event 2', date: '2021-08-18' },
      ]}
      eventContent={renderEventContent}
    />
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <div className="bg-gray-700">
      <p>Hello this is testing </p>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <button>Close</button>
    </div>
  );
}

export default App;
