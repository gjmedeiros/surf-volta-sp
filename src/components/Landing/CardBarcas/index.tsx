import React from 'react'

import './style.css'

interface INCardBarcasProps {
  imagem: string
  description: string
}

const CardBarcas: React.FC<INCardBarcasProps> = ({ imagem, description }) => {
  return (
    <article className="card-barcas">
      <header>
        <img src={imagem} alt="icon-barcas" />
      </header>

      <footer>{description}</footer>
    </article>
  )
}

export default CardBarcas
