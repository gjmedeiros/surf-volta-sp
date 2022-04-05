import  Logacao  from '../../components/Logacao'
import PageHeader from '../../components/PageHeader'

import './styles.css'

function login() {
  return (
    <div id="login" className="container">
      <header>
        <PageHeader />
      </header>
      <Logacao />
    </div>
  )
}

export default login
