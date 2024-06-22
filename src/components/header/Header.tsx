import React from 'react'
import { ContainerHeader } from './styles'
import logo from '../../images/image 1.png';
import { Link } from 'react-router-dom';

const Header = () => {
 
  return (
    <ContainerHeader>
      <div className='group-div'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='group-div'>
        <p>Loja Virtual</p>
      </div>
    </ContainerHeader>
  )
}

export default Header