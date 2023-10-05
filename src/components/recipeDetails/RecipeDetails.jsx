import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './recipeDetails.module.css'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const {id} = useParams()

  console.log(id)
  return (
    <div>RecipeDetails</div>
  )
}

export default RecipeDetails