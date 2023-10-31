import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return <MainHeader>
    <Link to='/'>
        <img src="https://arwebshark.com/wp-content/uploads/2022/02/arwebshark.jpg" className="img-fluid rounded-top" alt="Arwebshark" width="150"/>
    </Link>
    <Navbar/>
  </MainHeader>
}

const MainHeader = styled.header`
padding: 2rem 4.8rem;
background-color: ${({theme})=> theme.colors.bg};
display:flex;
justify-content: space-between;
align-item: center;
position: relative;
`

export default Header