import React from 'react'
import './serve.css'

const Serve = () => {
  return (<div className='serve'>
    <div className="container">
    <h1 className="text-center my-5">Our Services</h1>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Service 1</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero velit. Etiam lobortis ligula vel lacus volutpat tristique.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Service 2</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero velit. Etiam lobortis ligula vel lacus volutpat tristique.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Service 3</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero velit. Etiam lobortis ligula vel lacus volutpat tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  )
}

export default Serve
