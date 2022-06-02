import React from 'react'

type Props = {
    cssClass: string
}

const NavBar = ({ cssClass }: Props) => {
  return (
    <nav className={cssClass}>
        Aqui va mi NAV BAR en forma de componente
      </nav>
  )
}

export default NavBar