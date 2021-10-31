import React from 'react';

const Header = () => (
  <header className="primary-header">
    <i className="fas fa-bars icon-hamburger" />

    <div className="primary-header_logo">
      TNW
    </div>

    <nav className="primary-header_nav">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">news</a>
        </li>
        <li>
          <a href="#">events</a>
        </li>
        <li>
          <a href="#">programs</a>
        </li>
        <li>
          <a href="#">spaces</a>
        </li>
        <li>
          <a href="#">partner with us</a>
        </li>
      </ul>
    </nav>

    <i className="fas fa-envelope icon-newsletter" />
  </header>
);

export default Header;
