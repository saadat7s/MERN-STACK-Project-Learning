import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
const Home = () =>{ 

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => { // fetch the workouts from the api on the backend
        const fetchWorkout = async() => {
            const response = await fetch('http://localhost:4000/api/workouts')
                const json = await response.json() // now we will have an array of workout object in this json doc

                if(response.ok) {
                    setWorkouts(json)
                }
            }
        fetchWorkout()
    }, [])

    return (
    <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workout) => (
                 <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
    </div>
    )
}

export default Home