import React from 'react'
import pikachu from '../assets/img/pikachu.png'

const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido maestro pokemón</h1>
        <img className='imagen' src={pikachu} alt="imagenes" />
    </div>
  )
}

export default Home