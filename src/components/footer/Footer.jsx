import React from 'react'

const Footer = () => {
  const styles ={
    backgroundColor: '#333333' ,
     color:' white', 
     padding: '20px'
  }
  return (
    <footer style={styles}>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>About Us</h4>
          <p>Your restaurant name and a brief description of your restaurant.</p>
        </div>
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>Address: Your restaurant address</p>
          <p>Phone: Your restaurant phone number</p>
          <p>Email: Your restaurant email address</p>
        </div>
        <div class="col-md-4">
          <h4>Follow Us</h4>
          <p>Connect with us on social media:</p>
          <ul class="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
