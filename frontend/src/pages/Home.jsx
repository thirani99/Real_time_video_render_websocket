import React from 'react'
import { Link } from 'react-router-dom'
import Button1 from '../components/Button1'
const Home = () => {
    return (
        <div>
            <Link to='/websocket'><Button1> Real time Video render</Button1></Link>

        </div>

    )
}

export default Home