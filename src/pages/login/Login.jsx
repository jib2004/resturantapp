import React, { useRef } from 'react'
import './login.css'

const Login = ({onLogin}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function subHandle (e){
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if(email === 'wonderboypubg59@gmail.com' && password ==='Wonder59'){
      onLogin();
    }else{
      window.alert('Wrong password')
      return false;
    }
    
  }

  

  return (  
    <div className='login' class="p-5">
    <form class='border rounded-3 p-5 shadow w-50 m-auto' onSubmit={subHandle}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" ref={passwordRef}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" >Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger w-100"   >Submit</button>
</form>
      
    </div>
  )
}

export default Login
