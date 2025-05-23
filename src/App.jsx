import { BrowserRouter } from "react-router-dom";

import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer,} from "./components";
import { Achieve } from "./components";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Tech />
        <Education />
        <Project />
        {/* <Experience /> */}
        <Achieve />
        {/* <Achievement /> */}
        {/* <Profile/> */}
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
