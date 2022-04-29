import { useRef } from 'react'

import camp1 from '../../assets/images/camp1.svg'
import camp2 from '../../assets/images/camp2.svg'
import camp3 from '../../assets/images/camp3.svg'
import support from '../../assets/images/icons/support.svg'
import custo from '../../assets/images/iconsBarcas/custo.svg'
import duvida from '../../assets/images/iconsBarcas/duvida.svg'
import furgao from '../../assets/images/iconsBarcas/furgao.svg'
import organizar from '../../assets/images/iconsBarcas/organizar.svg'
import surfbt2 from '../../assets/images/surfbt2.svg'
import CardBarcas from '../../components/Landing/CardBarcas'
import CardItem from '../../components/Landing/CardItem'
import Footer from '../../components/Landing/Footer'
import PageHeader from '../../components/Landing/Header'

import './styles.css'

export const Landing = () => {
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

        <article className="card-support">
          <header>
            <img src={support} alt="support" />
          </header>
          <div>
            <strong>Apoiadores</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              architecto ducimus porro deserunt fugiat maiores numquam
              necessitatibus suscipit nulla deleniti cumque fuga excepturi,
              eaque natus sit doloremque, pariatur dolor eveniet.
            </p>
          </div>
          <div>
            <strong>Patrocinadores</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              vero tenetur, beatae, perferendis quas impedit nobis magnam quasi
              optio inventore itaque ex. Pariatur animi aliquid voluptas
              obcaecati, deleniti dolores quibusdam.
            </p>
          </div>
        </article>

        <div className="block-group-barcas">
          <CardBarcas
            imagem={furgao}
            description="As barcas tem o propósito de fazer um surf com amigos e pessoas novas,
        se você não tem carro para descer é uma boa solução e para quem gosta de
        companhias para fazer um surf."
          />
          <CardBarcas
            imagem={custo}
            description="Os Valores do bate e volta é dividido entre todos que descem, quanto
            mais amigos mais barato para todos! é dividido pedágio, gasolina e
            etc."
          />
          <CardBarcas
            imagem={duvida}
            description="Sempre postamos e anunciamos as barcas no grupo, para vc que tem
            carro é só adicionar e avisar de onde você vai estar saindo de sp,
            assim quem quiser ir com você, irá entrar em contato, já para quem
            não tem carro é só chamar e marcar tudo direitinho com o dono do
            carro, fazendo uma amizade e sem deixar de surfar."
          />
          <CardBarcas
            imagem={organizar}
            description="Você precisará entrar em contato com o anunciante da Barca para
            marcar e confirmar presença na Barca, pedimos que avise o
            responsável da barca caso ocorra imprevistos e Não vamos tolerar
            muitos canos nas barcas, só confirme se você for mesmo."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
