import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Navbar = styled.nav`
  width: 100%,
  height: 60px;  
  background: #DB7093;
  padding: 5px 0;

  a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    background: #ccc;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block
  }
`

const Header = () => (
  <Navbar>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </Navbar>
)

export default Header
