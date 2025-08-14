import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  const hl = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <Link to="/">Register</Link>|<Link to="/login">Login</Link>|{''}
    {
      token && (
        <>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-light" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-light" to="/about">About</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
       <li class="nav-item ">
        <Link class="nav-link text-light" to="/contact">Contact</Link>
      </li>
       <li class="nav-item ">
        <Link class="nav-link text-light" to="/dashboard">Dashboard</Link>|{''}
      </li>
      <button onClick={hl}>Logut</button>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
        </>
      )
    }

  <button class="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


</nav>
  </>
}

export default Header