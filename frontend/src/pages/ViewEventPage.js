import React from 'react'
import { Button } from 'reactstrap'
import Map from "../components/Map/Map";
import ShareButton from '../components/ShareButton' 

const ViewEventPage = (props) => {
    const { name, date, url, address, contact, organization, event_id } = props.location.state
    const readableDate = new Date(date).toString()
    return(
        <>
        <h1>Title: {name}</h1>
        <h3>Time: {readableDate}</h3>
        <h4>Organizer: {contact}</h4>
        <Map />
        <ShareButton platform='facebook'/>
        <ShareButton platform='twitter' hashtags={['trashWarriors']}/>
        <Button onClick={() => window.open(url, '_blank')}>Register</Button>
        </>
    )
}

export default ViewEventPage