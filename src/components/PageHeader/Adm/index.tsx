import { useState } from 'react'
import { Link } from 'react-router-dom'

import menuIcon from '../../../assets/images/icons/menu.svg'
import closeIcon from '../../../assets/images/icons/x.svg'
import logoImg from '../../../assets/images/logo.svg'

import './styles.css'

const PageHeader = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header className="page-header-adm">
      <div className="top-bar-container-adm">
        <div>
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
        </div>
        <ul className={click ? 'nav-options-adm active' : 'nav-options-adm'}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Alterar Sobre Nós</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Alterar Circuito</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Alterar Grupo do Whats</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Alterar Mercado</strong>
            </Link>
          </li>
        </ul>
        <div
          className="mobile-menu-adm"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          {click ? (
            <img src={closeIcon} alt="Close" />
          ) : (
            <img src={menuIcon} alt="Menu" />
          )}
        </div>
      </div>
    </header>
  )
}

export default PageHeader
