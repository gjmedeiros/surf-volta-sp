import custo from '../../../assets/images/iconsBarcas/custo.svg'
import duvida from '../../../assets/images/iconsBarcas/duvida.svg'
import furgao from '../../../assets/images/iconsBarcas/furgao.svg'
import organizar from '../../../assets/images/iconsBarcas/organizar.svg'

import './style.css'

const CardBarcas = () => {
  return (
    <article className="card-barcas">
      <header>
        <div className="barcas-flex-1">
          <h1>Barcas?</h1>
          <div className="furgaoo">
            <img className="img-barcas" src={furgao} alt="" />
            <p className="p-barcas">
              As barcas tem o propósito de fazer um surf com amigos e pessoas
              novas, se você não tem carro para descer é uma boa solução e para
              quem gosta de companhias para fazer um surf.
            </p>
          </div>
          <div className="custos">
            <img className="img-barcas" src={custo} alt="" />
            <p className="p-barcas">
              Os Valores do bate e volta é dividido entre todos que descem,
              quanto mais amigos mais barato para todos! é dividido pedágio,
              gasolina e etc.
            </p>
          </div>
        </div>
        <div className="barcas-flex-2">
          <div className="duvid">
            <img className="img-barcas" src={duvida} alt="" />
            <p className="p-barcas">
              Sempre postamos e anunciamos as barcas no grupo, para vc que tem
              carro é só adicionar e avisar de onde você vai estar saindo de sp,
              assim quem quiser ir com você, irá entrar em contato, já para quem
              não tem carro é só chamar e marcar tudo direitinho com o dono do
              carro, fazendo uma amizade e sem deixar de surfar.
            </p>
          </div>
          <div className="organization">
            <img className="img-barcas" src={organizar} alt="" />
            <p className="p-barcas">
              Você precisará entrar em contato com o anunciante da Barca para
              marcar e confirmar presença na Barca, pedimos que avise o
              responsável da barca caso ocorra imprevistos e Não vamos tolerar
              muitos canos nas barcas, só confirme se você for mesmo.
            </p>
          </div>
        </div>
      </header>
    </article>
  )
}

export default CardBarcas
