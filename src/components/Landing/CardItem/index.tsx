import React from 'react'

import './styles.css'

interface INCardItemProps {
  imagem: string
  description: string
}

const Landing: React.FC<INCardItemProps> = ({ imagem, description }) => {
  const newDescription = description.split('\n').map(str => <p>{str}</p>)

  return (
    <article className="card-item-landing">
      <header>
        <img src={imagem} alt="camp1" />
      </header>
      <footer>{newDescription}</footer>
    </article>
  )
}

export default Landing
