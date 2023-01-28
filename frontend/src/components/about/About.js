import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'


function About() {
    return (
        <div>
            <h1>ABOUT US</h1>
            <br></br>
            <div className='abt'>
                <div className='bg-light w-50'>
                    <h2>WHO WE ARE</h2>
                    <p>We are engineering students from VNRVJIET determined to make the lives of people in the rural areas. We as a team try to think of creative solutions to problems we see around us. After learning web development, we started searching for problems we can solve by using our skills. </p>
                    <h2>WHAT WE DO</h2>
                    <p>We witnessed that many people in different fields get away with so much because there is no communication between the prople and the government officials. A lot of doctors don't go to the hospitals but take their salary and cheat the system. We can see similar things happening in government schools where teachers are frequently absent. Even ration shops open at random times, they do not follow the schedule and also they try to cheat a lot. All these problems occur because there is no communication established between the common people and the higher authorities and we wanted to solve these problems so we made this app</p>
                </div>
            </div>
        </div>



    )
}

export default About