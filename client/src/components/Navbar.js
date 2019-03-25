import React from 'react'
import { Menu, } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <Menu style={{ background: 'pink', position: 'sticky', }}>
      <Menu.Item>
        <NavLink exact to='/' activeStyle={navStyles.active}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to='/blogs' activeStyle={navStyles.active}>
          Blogs
        </NavLink>
      </Menu.Item>
    </Menu>
)

const navStyles = {
  active: {
    color: 'red',
    fontWeight: 'bold',
  }
}

export default Navbar