import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface INputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<INputProps> = ({ name, ...rest }) => {
  return (
    <div className="input-block">
      <input type="text" {...rest} />
      <span className="focus-input" data-placeholder={name} />
    </div>
  )
}

export default Input
