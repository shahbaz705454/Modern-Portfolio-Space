import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
        {/* THeme toggle */}
        <ThemeToggle></ThemeToggle>
        
        
       


        {/* Background Effects */}

        <StarBackground></StarBackground>


        {/* navbar */}
        <Navbar></Navbar>


        {/* main content  */}



        {/* footer */}






    </div>
  )
}

export default Home