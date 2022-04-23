import React from 'react'

import './styles.css'

interface INCardItemProps {
  imagem: string
  description: string
}

const CardItem: React.FC<INCardItemProps> = ({ imagem, description }) => {
  const newDescription = description.split('\n').map(str => <p>{str}</p>)

  return (
    <article className="card-item">
      <header>
        <img src={imagem} alt="camp1" />
      </header>
      <footer>{newDescription}</footer>
    </article>
  )
}

export default CardItem
