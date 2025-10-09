'use client';

import React from 'react';
import './EventSchedule.css';

const EventSchedule = () => {
  const events = [
    {
      sNo: 1,
      event: 'Inauguration Ceremony',
      startTime: '9:00',
      endTime: '9:30',
      duration: '30',
      speakers: 'TBD'
    },
    {
      sNo: 2,
      event: 'Intro To Open Source',
      startTime: '9:30',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 3,
      event: 'Intro To Git & GitHub And Committing First Pr',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 4,
      event: 'Guest Speaker',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 5,
      event: 'Dividing Into Factions',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 6,
      event: 'Lunch',
      startTime: '12:30',
      endTime: '1:20',
      duration: '50 Min',
      speakers: ''
    },
    {
      sNo: 7,
      event: 'First Pr & Community Wall',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 8,
      event: 'am/Place',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 9,
      event: 'Terminal Task',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 10,
      event: 'Faction Game',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 11,
      event: 'Intro To Hack Week',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    },
    {
      sNo: 12,
      event: 'Closing Ceremony',
      startTime: 'TBD',
      endTime: 'TBD',
      duration: 'TBD',
      speakers: 'TBD'
    }
  ];

  return (
    <section id="event-schedule" className="schedule-section">
      <div className="schedule-container">
        <h2 className="schedule-title">Event Schedule</h2>
        <p className="schedule-description">
          Here&apos;s the complete schedule for the event. Stay tuned for updates!
        </p>
        
        <div className="table-wrapper">
          <table className="event-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Event</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
                <th>Speakers</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.sNo}>
                  <td data-label="S.No">{event.sNo}</td>
                  <td data-label="Event" className="event-name">{event.event}</td>
                  <td data-label="Start Time">{event.startTime}</td>
                  <td data-label="End Time">{event.endTime}</td>
                  <td data-label="Duration">{event.duration}</td>
                  <td data-label="Speakers">{event.speakers || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
