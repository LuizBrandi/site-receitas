import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './recipeDetails.module.css'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const [steps, setSteps] = useState([])
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const {id} = useParams()

  useEffect(() => {
    const fetchRecipeDetails = async() => {
      try {
        const res = await fetch(`${URL_DETAILS}${id}`)
        const data = await res.json()
        console.log(data.meals[0])
        setRecipe(data.meals[0])

        Object.keys(data.meals[0]).forEach((key) => {
          if(key.includes('strIngredient') && data.meals[0][key] !== ""){
            setIngredients(prev => {
              if(prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }

          if(key.includes('strMeasure') && data.meals[0][key] !== ""){
            setMeasures(prev => {
              if(prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }

          if(key.includes('strInstructions') && data.meals[0][key] !== ""){
            setSteps(prev => {
              if(prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }


        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipeDetails()
  }, [id])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>{recipe?.strMeal}</h2>
        <div className={classes.recipe}>
          <img src={recipe?.strMealThumb} />
          <h3>Ingredientes</h3>
          
          <div className={classes.ingredients}>
            {ingredients?.map((ingredient, index) => (
              <div key={ingredient} className={classes.ingredient}>
                <span>{ingredient}</span>
                 - 
                <span>{measures[index]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.steps}>
            <h3>Modo de Preparo</h3>
            {recipe?.strInstructions}
        </div>
      </div>
    </div>

  )
}

export default RecipeDetails