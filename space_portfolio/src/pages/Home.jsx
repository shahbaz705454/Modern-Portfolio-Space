import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/COntactSection'


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
        <main>
          <HeroSection></HeroSection>
          <AboutMe></AboutMe>
          <SkillSection></SkillSection>
          <ProjectSection></ProjectSection>
          <ContactSection></ContactSection>

        </main>



        {/* footer */}






    </div>
  )
}

export default Home