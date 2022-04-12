import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import menuIcon from '../../assets/images/icons/menu.svg'
import closeIcon from '../../assets/images/icons/x.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface INPageHeaderProps {
  path: string
  option: string
  path2: string
  option2: string
  path3: string
  option3: string
  path4: string
  option4: string
}

const PageHeader: React.FC<INPageHeaderProps> = ({
  path,
  option,
  path2,
  option2,
  path3,
  option3,
  path4,
  option4
}) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <div>
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option">
            <Link to={`${path}`} onClick={closeMobileMenu}>
              <strong>{option}</strong>
            </Link>
          </li>
          <li className="option">
            <Link to={`${path2}`} onClick={closeMobileMenu}>
              <strong>{option2}</strong>
            </Link>
          </li>
          <li className="option">
            <Link to={`${path3}`} onClick={closeMobileMenu}>
              <strong>{option3}</strong>
            </Link>
          </li>
          <li className="option">
            <Link to={`${path4}`} onClick={closeMobileMenu}>
              <strong>{option4}</strong>
            </Link>
          </li>
        </ul>
        <div
          className="mobile-menu"
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
