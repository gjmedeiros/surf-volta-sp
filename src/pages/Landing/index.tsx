import CardItem from '../../components/CardItem'
import PageHeader from '../../components/PageHeader'
import './styles.css'

function Landing() {
  return (
    <div id="landing" className="container">
      <PageHeader
        path="/"
        option="Sobre Nós"
        path2="/"
        option2="Circuito"
        path3="/"
        option3="Grupo do Whats"
        path4="/"
        option4="Mercado"
      />
      <main>
        <CardItem />
      </main>
    </div>
  )
}

export default Landing
