import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Services from './components/Services'
import Skills from './components/Skills'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Crousel from './components/Crousel'
// import About from './components/About'
// import Resume from './components/Resume'
// import Services from './components/Services'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import Blog from './components/Blog'

function App() {
  

  return (
    <>
    {/* <Navbar/> */}
    {/* <Crousel/> */}
    {/* <About/> */}
    {/* <Resume/> */}
    {/* <Services/> */}
    {/* <Skills/> */}
    {/* <Projects/> */}
    {/* <Blog/> */}
    {/* <Footer/> */}


  

  
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>
      </Routes>
      <Footer/>
     </Router>
    </>
 

    </>
  )
}

export default App
