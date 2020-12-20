import React from 'react'

import Searchbar from '../searchbar/Searchbar'
import Recipes from '../../recipe/Recipes'

class FridgePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="top">
                    <Searchbar />
                </div>
                <Recipes/>
            </div>
        )
    }

}

export default FridgePage