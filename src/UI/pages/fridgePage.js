import React from 'react'

import Searchbar from '../searchbar/Searchbar'
import Recipes from '../../recipe/Recipes'

import constants from '../../API/constants.js'


class FridgePage extends React.Component {

    /**
     * This Component acts like the link between the SearchBar and the Recipes.
     * It passes the list of food elements from the SearchBar to  the Recipes.
     * 
     * The state.data is the data from the API
     * 
     */

    constructor(props) {
        super(props)
        this.state = {
            listFoodstuffs: [],
            data: null,
            baseUrl: 'https://api.spoonacular.com/recipes/findByIngredients',
            maxRecipePerCall: 2,
            fetchError: null,
            fetchLoading: false
        }
    }

    updateListFoodstuffs(newlist) {

        /**
         * Called from SearchBar to update the Fridge's list.
         * Then fetches the api with that new list.
         */

        this.setState({
            listFoodstuffs : newlist
        }, () => {
            // fetch data
            this.fetchData()
        })
    }

    urlGenerator() {
        let url = this.state.baseUrl + '?apiKey=' + constants.APIKEY + '&ingredients='
        
        this.state.listFoodstuffs.forEach(element => {
            url += element.toString()
            if (element !== this.state.listFoodstuffs[this.state.listFoodstuffs.length - 1]) {
                url += ',+'
            }
        })

        url += '&number=' + this.state.maxRecipePerCall.toString()

        return url
    }

    fetchData() {
        if (this.state.fetchLoading || this.state.listFoodstuffs.length === 0) return 

        let url = this.urlGenerator()
        console.log('fetching from ' + url)

        this.setState({
            fetchLoading: true
        })

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data,
                    fetchLoading: false
                }, () => console.table(this.state.data))
            })
            .catch((e) => {
                this.setState({
                    fetchError: e,
                    fetchLoading: false
                })
            })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="top">
                    <Searchbar onListChanged={this.updateListFoodstuffs.bind(this)} />
                </div>
                <Recipes/>
            </div>
        )
    }

}

export default FridgePage