import { FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Eyeoff from '../../assets/images/icons/eye-off.svg'
import Eyeo from '../../assets/images/icons/eye.svg'
import logo from '../../assets/images/logo.svg'
import Input from '../../components/UI/Input'
import { AuthContext } from '../../contexts/Auth/AuthContext'

import './styles.css'

const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const handleVisible = () => setVisible(!visible)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    if (email && password) {
      const isLogged = await auth.signin(email, password)

      if (isLogged) {
        navigate('/Management/adm')
      } else {
        // eslint-disable-next-line no-alert
        alert('Falha na Autenticação')
      }
    }
  }

  return (
    <div id="login" className="container">
      <div className="container-login">
        <div className="wrap-login">
          <header>
            <strong>Bem vindo!</strong>
            <img src={logo} alt="logo" />
          </header>
          <main>
            <form onSubmit={handleLogin}>
              <fieldset>
                <Input
                  name="Email"
                  type="text"
                  value={email}
                  className={email !== '' ? 'has-val input' : 'input'}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
                <div className="block-input-password">
                  <Input
                    name="Password"
                    type={visible ? 'text' : 'password'}
                    className={password !== '' ? 'has-val input' : 'input'}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                  />

                  <button
                    type="button"
                    onClick={handleVisible}
                    onKeyDown={handleClick}
                    tabIndex={0}
                  >
                    {visible ? (
                      <img src={Eyeoff} alt="on" />
                    ) : (
                      <img src={Eyeo} alt="off" />
                    )}
                  </button>
                </div>
              </fieldset>
              <footer>
                <button type="submit">Login</button>
              </footer>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
