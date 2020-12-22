import React from 'react'
import Recipe from './Recipe'

class Recipes extends React.Component {

    /**
     * Recipes handles and lists all the recipes from the API data
     * which is stored in state.listFoodstuffs
     */

    constructor(props) {
        super(props)
        this.state = {
            listFoodstuffs: []
        }
    }

    // static getDerivedStateFromProps(props, state) {

    //     /**
    //      * Called when FridgePage's listFoodstuffs changed
    //      */

    //     if (props.listFoodstuffs !== state.listFoodstuffs) {
    //         console.log(props.listFoodstuffs)
    //         this.forceUpdate()
    //         return {
    //             listFoodstuffs: props.listFoodstuffs
    //         }
    //     }
    //     return null
    // }


    componentDidUpdate(prevProps) {
        if (prevProps.listFoodstuffs !== this.props.listFoodstuffs) {
            
            this.setState({
                listFoodstuffs: [...this.props.listFoodstuffs]
            }, () => {
                console.log(this.state.listFoodstuffs)
            })
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.listFoodstuffs !== this.state.listFoodstuffs) {
    //         this.setState({
    //             listFoodstuffs:p
    //         })
    //     }
    // }

    recipeList(foodList) {
        return (
            <div style={container}>
                {foodList.map((item, index) => (
                <Recipe key={index} data={item} />
                ))}
            </div>
        )
    }

    render() {
        return (
            <div style={container}>
                {this.props.listFoodstuffs.map((item, index) => (
                <Recipe key={index} data={item} />
                ))}
            </div>
            // <div>
            //     {this.state.listFoodstuffs.length === 0 ? 
            //         null :
            //         <div style={container}>
            //             {this.state.listFoodstuffs.map((item, index) => (
            //             <Recipe key={index} data={item} />
            //             ))}
            //         </div>
            //     }
            // </div>
        )
    }

}

export default Recipes

const container = {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '80vw',
    backgroundColor:'red'
}
