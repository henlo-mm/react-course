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
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu