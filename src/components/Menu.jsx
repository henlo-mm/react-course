import React from 'react'
import '../styles/Menu.scss';
function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu