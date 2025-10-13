'use client';

import React from 'react';
import './EventSchedule.css';

const EventSchedule = () => {
  const events = [
    {
      sNo: 1,
      event: 'Inauguration Ceremony',
      startTime: '9:30',
      endTime: '10:00',
      duration: '30',
      speakers: 'Malavika M'
    },
    {
      sNo: 2,
      event: 'Intro To Open Source',
      startTime: '10:30',
      endTime: '11:00',
      duration: '30',
      speakers: 'Hridesh MG'
    },
    {
      sNo: 3,
      event: 'Guest Speaker',
      startTime: '11:00',
      endTime: '12:00',
      duration: '60',
      speakers: 'Andrew Tavis Mcallister'
    },
    {
      sNo: 4,
      event: 'Dividing Into Factions',
      startTime: '12:00',
      endTime: '12:20',
      duration: '20',
      speakers: 'Malavika'
    },
    {
      sNo: 5,
      event: 'Lunch',
      startTime: '12:30',
      endTime: '1:20',
      duration: '50 Min',
      speakers: ''
    },
    {
      sNo: 6,
      event: 'Intro To Git & GitHub And Committing First Pr',
      startTime: '1:20',
      endTime: '3:00',
      duration: '90',
      speakers: 'Rohith & Gautham'
    },
    {
      sNo: 7,
      event: 'First Pr & Community Wall',
      startTime: '3:15',
      endTime: '3:45',
      duration: '30',
      speakers: 'Anandajith S'
    },
    {
      sNo: 8,
      event: 'am/Place',
      startTime: '3:45',
      endTime: '5:00',
      duration: '75',
      speakers: 'Naveen'
    },
    {
      sNo: 9,
      event: 'Faction Game',
      startTime: '5:30',
      endTime: '6:30',
      duration: '90',
      speakers: 'Teja Sai Charan'
    },
    {
      sNo: 10,
      event: 'Intro To Hack Week',
      startTime: '6:30',
      endTime: '6:50',
      duration: '20',
      speakers: 'Nishitha'
    },
    {
      sNo: 11,
      event: 'Closing Ceremony',
      startTime: '6:50',
      endTime: '7:00',
      duration: '20',
      speakers: 'Malavika'
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