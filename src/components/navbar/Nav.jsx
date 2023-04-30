import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [user, setUser] = useState([])
  //const abortController =new AbortController();
    useEffect(()=>{
        const url = 'https://randomuser.me/api/?results=1'
        fetch(url)
        .then((res)=>{
            console.log(res.status)
          return res.json()//Never put this in a console.log()
       })
       .then((data)=>{
            console.log(data)
            let people = data.results[0].name.first
            console.log(people)
            setUser(people)
            //setUser(data) 
       })


      //  return () => {
      //   console.log('Cleanup function called')
      //   abortController.abort()
      // }
    },[])
  return (
    

    <nav>
        <div className='left'>
        <i class="fa-solid fa-bolt"></i><span>Fintrack</span>
        </div>
        <div className='right'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/services'>Services</Link></li>
                {/* <li><a>Product</a></li>     */}
            </ul>
            {/* <div><button><i class="fa-solid fa-download"></i> Download app</button></div> */}
            
        </div>

        <div className='user'>
          <ul>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-solid fa-user"></i> <span>{user}</span></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav