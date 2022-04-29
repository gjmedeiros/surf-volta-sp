import React from 'react'

import whatsapp from '../../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface INCardItemProps {
  title: string
  imagem: string
  description: string
  medidas: string
  volume: string
  rabeta: string
  setup: string
  block: string
}

const Landing: React.FC<INCardItemProps> = ({
  title,
  imagem,
  description,
  medidas,
  volume,
  rabeta,
  setup,
  block
}) => {
  return (
    <article className="card-item-market">
      <header>
        <strong>{title}</strong>
        <img src={imagem} alt="camp1" />
      </header>
      <div className="block-info">
        <div className="block-info-market">
          <p>{description}</p>

          <p>
            <strong>Medidas:</strong> {medidas}
          </p>

          <p>
            <strong>Volume: </strong> {volume}
          </p>

          <p>
            <strong>Rabeta: </strong> {rabeta}
          </p>

          <p>
            <strong>Setup: </strong> {setup}
          </p>

          <p>
            <strong>Bloco: </strong> {block}
          </p>
        </div>
        <div className="block-icons-group">
          <button type="button">
            <img src={whatsapp} alt="whatsapp" />
            <strong>Grupo do WhatsApp</strong>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Landing
