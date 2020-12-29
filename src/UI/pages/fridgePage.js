import React, { useEffect, useState } from 'react'

import Searchbar from '../searchbar/Searchbar'
import Recipes from '../../recipe/Recipes'
import RecipesContext from '../../recipe/RecipeContext'

import constants from '../../API/constants.js'

import ApiReponsesExemple from '../../assets/data/apiResponseExemple.json'

const styleTop = {
    marginTop: '20vh',
    marginBottom: '5vh',
    display: 'flex',
    justifyContent: 'center',
}

const FridgePage = () => {

    /**
     * This page is aimed to list recipes according to the ingredients referenced by the user.
     * The ingredients (variale listFoodstuffs) is updated by Searchbar component.
     * The results of the API (variable data) is updated by fetching the API.
     */

    const [listFoodstuffs, setListFoodstuffs] = useState([])
    const [data, setData] = useState(ApiReponsesExemple)
    const [fetchError, setFetchError] = useState(null)
    const [fetchLoading, setFetchLoading] = useState(false)
    
    const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients'
    
    const maxRecipePerCall = 2

    useEffect(() => {

        /**
         * Once the listFoodstufs has been udpated, call the API and show the new results.
         */

        async function fetchData() {

            let url = urlFoodListGenerator(baseUrl, constants.APIKEY, maxRecipePerCall, listFoodstuffs)
            console.log('fetching from ' + url)

            await setFetchLoading(true)
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.table(data)
                    console.log(data)
                    setData(data)
                    setFetchLoading(false)

                })
                .catch((e) => {
                    setFetchError(e)
                    setFetchLoading(false)
                })
        }
        if (fetchLoading || listFoodstuffs.length === 0) return

        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listFoodstuffs])

    async function updateListFoodstuffs(newlist) {

        /**
         * Called from SearchBar to update the Fridge's list.
         * Then fetches the api with that new list.
         */
        
        await setListFoodstuffs([...newlist])
    }

    return (
        <div>
            <div style={styleTop}>
                <Searchbar onListChanged={updateListFoodstuffs} />
            </div>
            
            <RecipesContext.Provider value={data}>
                <Recipes/>
            </RecipesContext.Provider>
        </div>
    )


}

export default FridgePage

function urlFoodListGenerator(baseUrl, key, maxRecipePerCall, listFoodstuffs) {
    let url = baseUrl + '?apiKey=' + key + '&ingredients='
    
    listFoodstuffs.forEach(element => {
        url += element.toString()
        if (element !== listFoodstuffs[listFoodstuffs.length - 1]) {
            url += ',+'
        }
    })

    url += '&number=' + maxRecipePerCall.toString()

    return url
}
