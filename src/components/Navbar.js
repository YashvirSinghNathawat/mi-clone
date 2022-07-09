// rafce
import React from 'react'
import "../styles/nav.css"
import {Link} from "react-router-dom"
import packageInfo from "../data/data.json"
const logo = packageInfo.logo
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m15.938 17-4.98-4.979q-.625.458-1.375.719Q8.833 13 8 13q-2.083 0-3.542-1.458Q3 10.083 3 8q0-2.083 1.458-3.542Q5.917 3 8 3q2.083 0 3.542 1.458Q13 5.917 13 8q0 .833-.26 1.583-.261.75-.719 1.375L17 15.938ZM8 11.5q1.458 0 2.479-1.021Q11.5 9.458 11.5 8q0-1.458-1.021-2.479Q9.458 4.5 8 4.5q-1.458 0-2.479 1.021Q4.5 6.542 4.5 8q0 1.458 1.021 2.479Q6.542 11.5 8 11.5Z"/></svg>
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/">
                <img id="logoImage" src={logo} alt="Not"/>
            </Link>
        </div>
        <Link className='navlinks' to='/miphones'>Mi Phones</Link>
        <Link className='navlinks' to='/redmiphones'>Redmi Phones</Link>
        <Link className='navlinks' to='/tv'>TV</Link>
        <Link className='navlinks' to='/laptops'>Laptops</Link>
        <Link className='navlinks' to='/lifestyle'>Fitness & Lifestyle</Link>
        <Link className='navlinks' to='/home'>Home</Link>
        <Link className='navlinks' to='audio'>Radio</Link>
        <Link className='navlinks' to='accessories'>Accessories</Link> 
        <div className='searchbox'>
            <input type="text" name="search" placeholder="Search Products"/>
            {searchIcon}
        </div>
    </div>
  )
}

export default Navbar
/*
Link and anchor tag difference = Click on anchor tag reload the page.
*/