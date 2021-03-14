import React, { useState,  useEffect } from "react";
import EventCard from '../components/EventCard'
import Map from "../components/Map/Map";
import { FormGroup, Label, Input } from 'reactstrap';


const ViewEventsPage = () => {
  const [viewMap, setViewMap] = useState(true);
  const seedEvents = [
    {
    "event_id": 1,
    "name": "Litter Pickup",
    "date": 2613623652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "The Best Litter Cleanup Crew",
    "contact": "Mary Jane - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    {
    "event_id": 2,
    "name": "Trash Blast",
    "date": 154685652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "Yeet police",
    "contact": "Donkey Kong - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    {
    "event_id": 3,
    "name": "Litter Pickup",
    "date": 1612653652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "The Best Litter Cleanup Crew",
    "contact": "Mary Jane - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    {
    "event_id": 4,
    "name": "trash blast",
    "date": 1619613652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "trash blasterz",
    "contact": "Mary Jane - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    {
    "event_id": 5,
    "name": "Crud cleanup",
    "date": 1615683652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "Average joes",
    "contact": "Mary Jane - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    {
    "event_id": 6,
    "name": "Litter Pickup",
    "date": 1615683652,
    "address": "NE corner of 42@8th ave Manhattan",
    "organization": "The Best Litter Cleanup Crew",
    "contact": "Mary Jane - 718-123-456",
    "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    },
    
  ]
  const [events, setEvents] = useState(seedEvents)
  const [sortBy, setSortBy] = useState('Soonest')
  // useEffect(()=> {
  //   fetch('http://localhost:5000/events')
  //   .then(resp => resp.json())
  //   .then( events => setEvents(events))
  // }, [])
  
  
  const renderEvents = () => {
    let sortedEvents;
    switch(sortBy){
      // case 'Near Me':
      //   sortedEvents = events /// Can't figure out how to get the users location, unfortunately the geolocation thing isn't working for me
      //   break;
      case 'Soonest':
        sortedEvents = events.sort((a, b) => a.date < b.date ? -1 : 1)
        break;
        case 'Latest':
        sortedEvents = events.sort((a,b) => a.date < b.date ? 1 : -1)
        break;
      default:
        return;
      }
      return sortedEvents.map(event => <EventCard event={event} key={event.event_id} />)
  }
  return (
    <div>
      <button onClick={() => setViewMap(true)}>View map</button>
      <button onClick={() => setViewMap(false)}>View events</button>
      {viewMap ?
       <Map />
      :
       <>
        <FormGroup>
        <Label for="sort-events">Sort</Label>
        <Input type="select" name="select" onChange={e => setSortBy(e.target.value)}>
          <option value='Soonest'>Soonest</option>
          <option value='Latest'>Latest</option>
          {/* I dont know to implement 'near me' */}
          {/* <option value='Near me'>Near me</option>  */}
        </Input>
      </FormGroup>
       {renderEvents()}
       </>
       }
    </div>
  );
};

export default ViewEventsPage;