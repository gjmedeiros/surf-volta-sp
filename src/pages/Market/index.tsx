import pranchaBlue from '../../assets/images/pranchaBlue.svg'
import Footer from '../../components/Landing/Footer'
import PageHeader from '../../components/Landing/Header'
import CardItem from '../../components/Market/CardItem'

import './styles.css'

function Market() {
  return (
    <div id="market" className="market">
      <PageHeader />

      <main>
        <strong>Pranchinhas</strong>
        <div className="block-board">
          <CardItem
            title="Prancha de Surf Surface Joker 5 9 Seminova"
            imagem={pranchaBlue}
            description="Prancha da Surface, Fábrica do Shaper Luciano Leão pioneiro de
            Pranchas em série fabricadas no Brasil. O Modelo Joker é uma otima
            opção e versátil."
            medidas="5 9 x 19 x 2 1/2"
            volume="26,6 L"
            rabeta="Squash"
            setup="5 plugs FCS 1 (Não acompanha as quilhas)"
            block="PU"
          />

          <CardItem
            title="Prancha de Surf Surface Joker 5 9 Seminova"
            imagem={pranchaBlue}
            description="Prancha da Surface, Fábrica do Shaper Luciano Leão pioneiro de
            Pranchas em série fabricadas no Brasil. O Modelo Joker é uma otima
            opção e versátil."
            medidas="5 9 x 19 x 2 1/2"
            volume="26,6 L"
            rabeta="Squash"
            setup="5 plugs FCS 1 (Não acompanha as quilhas)"
            block="PU"
          />

          <CardItem
            title="Prancha de Surf Surface Joker 5 9 Seminova"
            imagem={pranchaBlue}
            description="Prancha da Surface, Fábrica do Shaper Luciano Leão pioneiro de
            Pranchas em série fabricadas no Brasil. O Modelo Joker é uma otima
            opção e versátil."
            medidas="5 9 x 19 x 2 1/2"
            volume="26,6 L"
            rabeta="Squash"
            setup="5 plugs FCS 1 (Não acompanha as quilhas)"
            block="PU"
          />

          <CardItem
            title="Prancha de Surf Surface Joker 5 9 Seminova"
            imagem={pranchaBlue}
            description="Prancha da Surface, Fábrica do Shaper Luciano Leão pioneiro de
            Pranchas em série fabricadas no Brasil. O Modelo Joker é uma otima
            opção e versátil."
            medidas="5 9 x 19 x 2 1/2"
            volume="26,6 L"
            rabeta="Squash"
            setup="5 plugs FCS 1 (Não acompanha as quilhas)"
            block="PU"
          />

          <CardItem
            title="Prancha de Surf Surface Joker 5 9 Seminova"
            imagem={pranchaBlue}
            description="Prancha da Surface, Fábrica do Shaper Luciano Leão pioneiro de
            Pranchas em série fabricadas no Brasil. O Modelo Joker é uma otima
            opção e versátil."
            medidas="5 9 x 19 x 2 1/2"
            volume="26,6 L"
            rabeta="Squash"
            setup="5 plugs FCS 1 (Não acompanha as quilhas)"
            block="PU"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Market
