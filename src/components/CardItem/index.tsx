import React from 'react'

import camp1 from '../../assets/images/camp1.svg'

import './styles.css'

function CardItem() {
  return (
    <article className="card-item">
      <header>
        <img src={camp1} alt="camp1" />
      </header>
      <footer>
        Somos um Grupo de surf de São Paulo capital e grande São Paulo. Temos
        Surfistas de Todos os níveis de surfe trocamos muitas informações sobre
        condições do mar,picos,trips,produtos de surf e de modo geral.
      </footer>
    </article>
  )
}

export default CardItem
