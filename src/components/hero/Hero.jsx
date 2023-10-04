import React, { useState } from 'react'
import { useEffect } from  'react'
import classes from './hero.module.css'
import meal from '../../assets/chicken_pie.jpg'

const Hero = () => {
  const URL1 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Big Mac"
  const [chickenRecipe, setChickenRecipe] = useState('')
  const [burguerRecipe, setBurguerRecipe] = useState('')


  useEffect(() => {
    const fetchChickenRecipe = async() => {
      try {
        const res = await fetch(URL1)
        const data = await res.json()
        // console.log(data.meals)
        setChickenRecipe(data.meals[5])
      } catch (error) {
        console.error(error)
      }
    }
    fetchChickenRecipe()
  }, [])

  useEffect(() => {
    const fetchBurguerRecipe = async() => {
      try {
        const res = await fetch(URL2)
        const data = await res.json()
        
        setBurguerRecipe(data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchBurguerRecipe()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Bateu a fome aí?</h2>
          <h5>Emperimente algo novo</h5>
          <p className={classes.firstDesc}>
            Aqui é o melhor lugar para achar receitas deliciosas
          </p>
          <p className={classes.secondDesc}>
            Confira um mundo de possibilidades
          </p>
          <div className={classes.buttons}>
            <button>Explore as receitas</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} />
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burguerRecipe?.strMealThumb} />
            </div>
            <h5>{burguerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero