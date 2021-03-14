# API Documentation

### Create an Event
Authentication: this requires either a role of `admin` or `organizer`.

**Request:** `POST /event`
```json
{
  "name": "Litter Pickup",
  "date": 1615683652,
  "url": "https://www.eventbrite.com/e/trash-pickup-tickets-146028217329"
}
```
* name [string] (required): the name of the event
* date [int] (required): epoch time in seconds
* url [string] (optional): a url for the event

**Response:**
```
{"event_id":"1"}
```

