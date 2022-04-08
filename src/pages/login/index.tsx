import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import Input from '../../components/Input'

import './styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div id="login" className="container">
      <div className="container-login">
        <div className="wrap-login">
          <header>
            <strong>Bem vindo!</strong>
            <img src={logo} alt="logo" />
          </header>
          <main>
            <form>
              <fieldset>
                <Input
                  name="Email"
                  value={email}
                  className={email !== '' ? 'has-val input' : 'input'}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />

                <Input
                  name="Password"
                  className={password !== '' ? 'has-val input' : 'input'}
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                />
              </fieldset>

              <footer>
                {/* Botão Oficial */}
                {/* <button type="submit">Login</button> */}

                {/* Temporario até ser construido o BackEnd */}
                <Link to="/Management/Adm">Login</Link>
              </footer>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
