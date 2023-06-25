import React from 'react'
import Title from './title';

function Header() {
  return (
    <div>
    <div className='header-component'>
     <Title/>
     <h2>UI/UX designer(Mobile application)</h2>
    
    <div className='nav-items'>
    <ul>
    <button className="">Delete</button>
      <button className="">Saved</button>

    </ul>
    </div>
   </div>
  </div>

  )
}

export default Header;