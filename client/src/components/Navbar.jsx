import React, { useContext } from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const {currentUser , logout } = useContext(AuthContext);

  return (
    <div className='navbar' >
      <div className="container">
        <div className="logo">
          <Link to="/" >
          <img src={Logo} alt='logo-image' />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art' >
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=art' >
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=art' >
            <h6>SPORTS</h6>
          </Link>
          <Link className='link' to='/?cat=art' >
            <h6>ECONOMICS</h6>
          </Link>
          <Link className='link' to='/?cat=art' >
            <h6>TECHNOLOGY</h6>
          </Link>

          <span>{currentUser?.username}</span>
          { currentUser ? <span onClick={logout} >Logout</span> : <Link className='link' to='/login' >Login</Link> }
          <span className='write' >
            <Link to='/write' >Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar