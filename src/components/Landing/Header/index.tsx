import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import menuIcon from '../../../assets/images/icons/menu.svg'
import closeIcon from '../../../assets/images/icons/x.svg'
import logoImg from '../../../assets/images/logo.svg'
import { Landing } from '../../../pages/Landing'

import './styles.css'

const PageHeader = () => {
  const [click, setClick] = useState(false)
  const closeMobileMenu = () => setClick(false)
  const handleClick = () => setClick(!click)

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
            click ? 'nav-options-landing active' : 'nav-options-landing'
          }
        >
          <li>
            <button type="button" onClick={closeMobileMenu}>
              <strong>Sobre Nós</strong>
            </button>
          </li>
          <li>
            <button type="button" onClick={closeMobileMenu}>
              <strong>Circuito</strong>
            </button>
          </li>
          <li>
            <button type="button" onClick={closeMobileMenu}>
              <strong>Grupo do Whats</strong>
            </button>
          </li>
          <li>
            <Link to="/management/market" onClick={closeMobileMenu}>
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
