import React, { useEffect } from 'react'

import Recipe from './Recipe'
import RecipesContext from './RecipeContext'

const Recipes = () => {
    
    /**
     * Recipes handles and lists all the recipes from the API data
     * which is stored in the variable listFoodstuffs from the RecipesContext
     */

    return(
        <div style={container}>
            <RecipesContext.Consumer>
                {listFoodstuffs => (
                    listFoodstuffs.map((item, index) => (
                        <Recipe key={index} data={item} />
                        ))
                )}
            </RecipesContext.Consumer>
        </div>
    )

}

export default Recipes

const container = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '95vw',
    backgroundColor:'transparent'
}
