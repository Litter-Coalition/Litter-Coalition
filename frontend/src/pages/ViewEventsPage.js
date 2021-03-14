import React, { useState } from 'react'




const ViewEventsPage = () => {
    const [viewMap, setViewMap] = useState(true)
    return(
        <div>
            <button onClick={() => setViewMap(true)}>View map</button>
            <button onClick={() => setViewMap(false)}>View events</button>
            {viewMap ?
            <h1>Im a map</h1>
            :
            <h1>I'm a list of events</h1>
            }
        </div>
    )
}

export default ViewEventsPage