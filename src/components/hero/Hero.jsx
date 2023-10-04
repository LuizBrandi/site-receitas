import React, { useState } from 'react'
import { useEffect } from  'react'
import classes from './hero.module.css'

const Hero = () => {
  const URL1 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  const URL2 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=burguer"
  const [chickenRecipe, setChickenRecipe] = useState("")
  const [burguerRecipe, setBurguerRecipe] = useState("")


  useEffect(() => {
    const fetchChickenRecipe = async() => {
      try {
        const res = await fetch(URL1)
        const data = await res.json()

        console.log(data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchChickenRecipe()
  }, [])

  useEffect(() => {
    const fetchBurguerRecipe = async() => {
      
    }
  }, [])

  return (
    <div>Hero</div>
  )
}

export default Hero