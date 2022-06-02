import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar  from '../NavBarComponent/NavBar'
import './Layout.css'
type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='grid'>
      <header className='header'>
        Aqui va mi HEADER
      </header>

      
      <NavBar cssClass='nav'  />

      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout