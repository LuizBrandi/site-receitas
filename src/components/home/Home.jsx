import React from 'react'
import Hero from '../hero/Hero'
import Categories from '../categories/Categories'
import RecipeIndex from '../recipeIndex/RecipeIndex'
import classes from './home.module.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <RecipeIndex />
      <Categories />
    </div>
  )
}

export default Home