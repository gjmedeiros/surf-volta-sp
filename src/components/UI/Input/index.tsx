import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface INputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
}

const Input: React.FC<INputProps> = ({ type, name, ...rest }) => {
  return (
    <div className="input-block">
      <input type={type} {...rest} />
      <span className="text-input" data-placeholder={name} />
    </div>
  )
}

export default Input
