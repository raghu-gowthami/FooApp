import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import UseDemo1Prop from './UseDemo1Prop';

const UseDemo1 = () => {
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setActivities([...activities, activity])
        setActivity("")
        // console.log(activities);

    }


    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Activity"
                    name='activity'
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                /> <br/>

                <Button variant='contained' type='submit'>Register</Button>
            </form>
            {activities.map((item) => (
               <UseDemo1Prop key={item} item={item} activities={activities} setActivities={setActivities} />
            ))}
        </Container>
    )
}

export default UseDemo1
