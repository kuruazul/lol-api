import About from './sections/body/About'
import Nav from './sections/Nav'
import { useState } from 'react'
const Container = () => {
    return(
        <div>
            <Nav/>
            <About/>
        </div>
    )    
}

export default Container