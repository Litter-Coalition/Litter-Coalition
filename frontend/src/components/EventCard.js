import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useHistory } from 'react-router-dom'


const EventCard = (props) => {
    const { name, date, url, address, contact, organization, event_id } = props['event']
    const readableDate = new Date(date).toString()
    const history = useHistory()
        
    return(
        <Card body className="text-center">
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>Where: {address}</CardText>
            <CardText>Organizer: {contact}</CardText>
            <CardText>Organization: {organization}</CardText>
            <CardText>Date: {readableDate}</CardText>
            <Button onClick={() => history.push({pathname: `/event/${event_id}`, state: props['event']})}>Register</Button>
        </Card>
    )
}

export default EventCard