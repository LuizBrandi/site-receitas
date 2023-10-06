import React from 'react'
import classes from './recipeIndex.module.css'

const RecipeIndex = () => {
    const URL_INDEX = "https://www.themealdb.com/api/json/v1/1/search.php?f="
    const URL_INDEX_RECIPE = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
     'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'];

    

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
            <h5>Pesquise pela incial da sua comida favorita</h5>
        </div>
        <div className={classes.letter}>
          {
            letter.map(alpha =>{
                return(
                    <div className={classes.letterBox}>
                        <h3>{alpha}</h3>
                    </div>
                )
            })
          }
        </div>
        <div className={classes.recipes}>

        </div>
      </div>
    </div>
  )
}

export default RecipeIndex