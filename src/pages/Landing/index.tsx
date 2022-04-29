import camp1 from '../../assets/images/camp1.svg'
import camp2 from '../../assets/images/camp2.svg'
import camp3 from '../../assets/images/camp3.svg'
import surfbt2 from '../../assets/images/surfbt2.svg'
import CardItem from '../../components/Landing/CardItem'
import Footer from '../../components/Landing/Footer'
import PageHeader from '../../components/Landing/Header'

import './styles.css'

function Landing() {
  return (
    <div id="landing" className="container">
      <PageHeader />

      <main>
        <div className="block-group-camp">
          <CardItem
            imagem={camp1}
            description="Somos um Grupo de surf de São Paulo capital e grande São Paulo. Temos
          Surfistas de Todos os níveis de surfe trocamos muitas informações sobre
          condições do mar,picos,trips,produtos de surf e de modo geral."
          />

          <CardItem
            imagem={camp2}
            description="Nosso primeiro campeonato Realizado em frente a Skatepark Bertioga Foi o maior sucesso! Tendo o
          campeonato com belas premiações, gincanas para crianças e
          entretenimento para toda família."
          />

          <CardItem
            imagem={camp3}
            description="Nosso objetivo é proporcionar surf para todos, pois acreditamos que o
          surf é um estilo de vida e deve ser compartilhado na sua essência,
          ecercendo o espírito aloha."
          />
        </div>

        <strong>Circuito</strong>
        <div className="block-group-circuit">
          <div className="block-circuit">
            <CardItem
              imagem={surfbt2}
              description={`Não perca esse evento!!
            Nossa primeira etapa será realizada dia 9 e 10 de abril em Bertioga na
          frente da pista de skate ao lado do hotel 27.
          Com surfistas de todos os lugares, esse circuito é para toda a família
          se divertir tendo muito estilo com os Longboards, Sorteio de kits,
          Cobertura com imagens dentro e fora da água, exposição das marcas dos
          nossos apoiadores e Patrocinadores durante o evento, Tendas com
          exposição de produtos e claro Troféu para os Colocados de cada
          categoria.
          Teremos a maior honra de recebê-los em nosso evento! e que
          venha os próximos.`}
            />
          </div>
          <div className="block-sponsors">
            <CardItem
              imagem={camp3}
              description="Nosso objetivo é proporcionar surf para todos, pois acreditamos que o
          surf é um estilo de vida e deve ser compartilhado na sua essência,
          ecercendo o espírito aloha."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Landing
