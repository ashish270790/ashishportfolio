import React from 'react'
import Crousel from '../components/Crousel'
import About from '../components/About'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contacts from '../components/Contacts'

function HomeScreen() {
  return (
    <>
    <div className='' style={{marginTop:'13vh'}}><Crousel/></div>
    <div className='mb-5' style={{marginTop:'13vh'}}><About/></div>
    <div className='mt-5' style={{marginTop:'13vh'}}><Resume/></div>
    <div style={{marginTop:'13vh'}}><Services/></div>
    <div style={{marginTop:'13vh'}}><Skills/></div>
    <div style={{marginTop:'13vh'}}><Projects/></div>
    <div style={{marginTop:'13vh'}}><Blog/></div>
    <div style={{marginTop:'13vh'}}><Contacts/></div>
    
    </>
  )
}

export default HomeScreen