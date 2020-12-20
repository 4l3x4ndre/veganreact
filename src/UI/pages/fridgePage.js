import React from 'react'

import Searchbar from '../searchbar/Searchbar'
import Recipes from '../../recipe/Recipes'

class FridgePage extends React.Component {

    /**
     * This Component acts like the link between the SearchBar and the Recipes.
     * It passes the list of food elements from the SearchBar to  the Recipes.
     */

    constructor(props) {
        super(props)
        this.state = {
            listFoodstuffs: null
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