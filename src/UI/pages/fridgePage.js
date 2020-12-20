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
            listFoodstuffs: null,
            baseUrl: 'https://api.spoonacular.com/recipes/',
            data: null,
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
            this.fetchData('complexSearch', '&query=pasta&maxFat=25&number=2')
        })
    }

    fetchData(search, query) {
        if (this.state.fetchLoading) return 

        this.setState({
            fetchLoading: true
        })

        let url = this.state.baseUrl + search + '?apiKey=' + constants.APIKEY + query

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data,
                    fetchLoading: false
                }, () => console.log(this.state.data))
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