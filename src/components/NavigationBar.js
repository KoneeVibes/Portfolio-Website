import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBar = styled.div`
display: flex;
padding: 0.5em;
background-color: #800080;

.nav-element{
    flex: 1;
}

.logo{
    padding-left: 1em;
}

.list-items{
    display: flex;
    list-style-type: none
}

.li-item{
    flex: 1;
}
.li-link{
    text-decoration: none;
    color: #fff
}
`

const NavigationBar = () => {
  return (
    <NavBar>
        <p className='nav-element logo'>KoneeVibes</p>     
        <ul className='nav-element list-items'>
            <li className='li-item'><Link className='li-link' to='/'>Home</Link></li>
            <li className='li-item'><Link className='li-link' to='Resume'>Resume</Link></li>
            <li className='li-item'><Link className='li-link' to='#'>Projects</Link></li>
            <li className='li-item'><Link className='li-link' to='#'>Contact</Link></li>
        </ul>       
    </NavBar>
  )
}

export default NavigationBar
