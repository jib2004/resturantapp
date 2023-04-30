import React from 'react'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'
import Article from '../../components/article/Article'
import './about.css'

const About = () => {
  return (
    <div>
    <Nav />
      <h1 className='About_header'>This is a About page</h1>

      <Article />

      <Footer />
      
    </div>
  )
}

export default About
