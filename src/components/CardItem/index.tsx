import React from 'react'

import './styles.css'

interface INCardItemProps {
  imagem: string
  description: string
}

const CardItem: React.FC<INCardItemProps> = ({ imagem, description }) => {
  return (
    <article className="card-item">
      <header>
        <img src={imagem} alt="camp1" />
      </header>
      <footer>{description}</footer>
    </article>
  )
}

export default CardItem
