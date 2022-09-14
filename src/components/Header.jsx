import React from 'react'
import { GoGlobe } from "react-icons/go";

function Header() {
  return (
    <div>
      <nav>
        <div className="logo"><GoGlobe/><span>My travel journal</span> </div> 
      </nav>
    </div>
  )
}

export default Header
