import React from 'react'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'
import Search from '../../components/searchbar/Search'
import Aside from '../../components/aside/Aside'
import Main from '../../components/main_homepage/Main'
import './home.css'
const Home = () => {
  return (
    <div>
      <Nav />
      <Search />
      <div class='border d-flex align-items-start
      p-3 main_design'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default Home
