import React, { useEffect, useState } from 'react'

import Searchbar from '../searchbar/Searchbar'
import Recipes from '../../recipe/Recipes'

import constants from '../../API/constants.js'


const FridgePage = () => {
    const [listFoodstuffs, setListFoodstuffs] = useState([])
    const [data, setData] = useState([])
    const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients'
    const maxRecipePerCall = 2
    const [fetchError, setFetchError] = useState(null)
    const [fetchLoading, setFetchLoading] = useState(false)

    useEffect(() => {
        fetchData()
        console.log(listFoodstuffs)
    }, [listFoodstuffs])

    async function updateListFoodstuffs(newlist) {

        /**
         * Called from SearchBar to update the Fridge's list.
         * Then fetches the api with that new list.
         */
        
        await setListFoodstuffs([...newlist])
        console.log(listFoodstuffs)
        // fetchData()
    }

    function urlGenerator() {
        let url = baseUrl + '?apiKey=' + constants.APIKEY + '&ingredients='
        
        listFoodstuffs.forEach(element => {
            url += element.toString()
            if (element !== listFoodstuffs[listFoodstuffs.length - 1]) {
                url += ',+'
            }
        })

        url += '&number=' + maxRecipePerCall.toString()

        return url
    }

    async function fetchData() {
        if (fetchLoading || listFoodstuffs.length === 0) return 

        let url = urlGenerator()
        console.log('fetching from ' + url)

        await setFetchLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setFetchLoading(false)
                console.table(data)
            })
            .catch((e) => {
                setFetchError(e)
                setFetchLoading(false)
            })
        
    }

    return (
        <div>
            <div style={styleTop}>
                <Searchbar onListChanged={updateListFoodstuffs} />
            </div>
            
            <Recipes listFoodstuffs={data}/>
        </div>
    )


}

export default FridgePage

const styleTop = {
    marginTop: '20vh',
    display: 'flex',
    justifyContent: 'center',
}
