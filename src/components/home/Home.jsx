import React from 'react'
import Hero from '../hero/Hero'
import Categories from '../categories/Categories'
import classes from './home.module.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  )
}

export default Home