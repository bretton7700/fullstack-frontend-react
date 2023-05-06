import React from 'react'
import logo from '../Assets/fullstack.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Fullstack Springboot Application
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Link 
                    className='btn btn-outline-light' to="/adduser">
                        Add User
                    </Link>
                </div>
            </nav>
        </div>
    )
}
