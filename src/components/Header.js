import React from 'react'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="header-page">
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={logo}
            alt="Character Reading logo"
            className="character-logo"
          />
        </NavLink>
      </NavItem>
      <div className="meet-add">
      <NavItem>
        <NavLink to="/characterindex" className="nav-link">
          Meet the Characters
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/characternew" className="nav-link">
          Add a New Character
        </NavLink>
      </NavItem>
      </div>
    </Nav>
    </div>
  )
}
 
export default Header;