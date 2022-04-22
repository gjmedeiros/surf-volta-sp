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
    <header className="page-header-landing">
      <div className="top-bar-container-landing">
        <div>
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
        </div>
        <ul
          className={
            click ? 'nav-options-landing-active' : 'nav-options-landing'
          }
        >
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Sobre Nós</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Circuito</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Grupo do Whats</strong>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              <strong>Mercado</strong>
            </Link>
          </li>
        </ul>
        <div
          className="mobile-menu-landing"
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
