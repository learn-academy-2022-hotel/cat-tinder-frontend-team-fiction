import React from 'react'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SpidermanReading from "../assets/SpidermanReading.avif"

const Header = () => {
  return (
    <Nav className="header-nav">
    <NavItem>
      <NavLink to="/">
        <img
          src={SpidermanReading}
          alt="Character Reading logo"
          className="character-logo"
        />
      </NavLink>
    </NavItem>
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
    <NavItem>
      <a
        target="blank"
        href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
        className="nav-link"
      >
        Adopt a Character!
      </a>
    </NavItem>
  </Nav>
)
}
 
export default Header;