import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'

import './styles.css'

function Landing() {
  return (
    <div id="landing" className="container">
      <PageHeader />
    </div>
  )
}

export default Landing
