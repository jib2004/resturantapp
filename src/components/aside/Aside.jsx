import React from 'react'
import './aside.css'

const Aside = () => {
  return (
    <aside class='border  '>
      <div className='aside_icons'>
        <ul>
            <li><a><i class="fa-solid fa-house"></i></a></li>
            <li><a><i class="fa-solid fa-scroll"></i></a></li>
            <li><a><i class="fa-solid fa-location-dot"></i></a></li>
            <li><a><i class="fa-solid fa-money-bill"></i></a></li>
            <li><a><i class="fa-solid fa-door-open"></i></a></li>
        </ul>
      </div>
     
      <div className='aside_links'>

      <ul>
            <li><a>Home</a></li>
            <li><a>Orders</a></li>
            <li><a>Restutants</a></li>
            <li><a>Finance</a></li>
            <li><a>Logout</a></li>
        </ul>
      </div>


      <div className='aside_footer'>
        <ul>
            <li><a><i class="fa-solid fa-gear"></i></a></li>
            <li><a><i class="fa-solid fa-bell"></i></a></li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside
