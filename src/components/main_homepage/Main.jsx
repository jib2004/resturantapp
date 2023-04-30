import React from 'react'
import Carousel from '../carousel/Carousel'
import './main.css'
import Food from '../food_section/Food'

const Main = () => {
  
  return (
    <main class='border' className=''>
    <header>
    <Carousel/>
    </header>

    <section>
      <Food />
    </section>
      
    </main>
  )
}

export default Main
