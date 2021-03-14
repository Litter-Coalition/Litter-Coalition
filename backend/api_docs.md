# API Documentation

### List Events
Authentication: this route does not require authentication
**Request:** `GET /event`
```json
{
  "events": [
    {
      "event_id": 1,
      "name": "Litter Pickup",
      "date": 1615683652,
      "address": "NE corner of 42@8th ave Manhattan",
      "organization": "The Best Litter Cleanup Crew",
      "contact": "Mary Jane - 718-123-456",
      "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
    }
  ]
}
```

### Create an Event
Authentication: this requires either a role of `admin` or `organizer`.

**Request:** `POST /event`
```json
{
  "name": "Litter Pickup",
  "date": 1615683652,
  "address": "NE corner of 42@8th ave Manhattan",
  "organization": "The Best Litter Cleanup Crew",
  "contact": "Mary Jane - 718-123-456",
  "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
}
```
* name [string] (required): the name of the event
* date [int] (required): epoch time in seconds
* address [string] (optional): a meetup address for the event
* organization [string] (optional): the organizer's group
* contact [string] (optional): contact info for the organizer
* url [string] (optional): a url for the event

**Response:**
```
{"event_id":"1"}
```

