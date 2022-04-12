import CardItem from '../../components/CardItem'
import PageHeader from '../../components/PageHeader'
import './styles.css'

function Landing() {
  return (
    <div id="landing" className="container">
      <PageHeader />
      <main>
        <CardItem />
      </main>
    </div>
  )
}

export default Landing
