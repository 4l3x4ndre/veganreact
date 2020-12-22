import React from 'react'
import {Text} from 'react-native'

import SearchItem from './SearchItem'

class SearchItemsContainer extends React.Component {

    /**
     * This component is the container for all of the items.
     * When an item is deleted, the container rebuild a new list of item,
     * and give this new list back to the SearchBar which needs this list as well.
     */


     /**
      * The data is the list of item.
      * OldProps is stored to check if the new one will be different.
      * updateListAction is used by the item when it's deleted.
      */

    async loadData() { // TEST function
        return await ['a', 'b']
    }

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            oldProps: null,
            updateListAction: null
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.dada !== prevProps.data) {
    //         // console.log(this.state.data)
    //         // this.setState({
    //         //     data: this.props.data,
    //         //     updateListAction: this.props.updateListAction
    //         // }, () => console.log(this.state.data))
    //     }
    // }

    static getDerivedStateFromProps(props, state) {

        /**
         * This react function is called by the SearchBar when its list of items changes.
         * If the new list is different then update the container's list.
         */

        if (props.data !== state.data) {
            return {
                data: props.data,
                // oldProps : props.data,
                updateListAction: props.updateListAction
            }
        }
        return null
    }

    componentWillUnmount() { // TEST function
      if (this._asyncRequest) {
        this._asyncRequest.cancel();
      }
    }

    deleteItem = (itemText) => {

        /**
         * This function is called by the item (as 'deleteAction').
         * It searches the index of the item. Then removes it from the copy list.
         * And then it set the state.data of this component with the new list without the item.
         * When the state.data has been updated, it calls the 'updateListAction', in order to
         * update the SearchBar list as well.
         */

        let copy = [...this.state.data]
        let index = copy.indexOf(itemText)
        if (index !== -1) {
            copy.splice(index, 1)
            this.setState({
                data:copy
            }, () => {
                this.state.updateListAction(copy, true)
            })
        }
    }

    itemList() {

        /**
         * Create a list of Item by mapping on the state.data array.
         */
        
        return (
            <div style={wrapper}>
                {this.state.data.map((item, index) => (
                <SearchItem key={index} text={item} deleteAction={this.deleteItem} />
                ))}
            </div>
        )
    }


    renderItems () { //TEST function
        return( 
            <Text>{this.state.data[0]}</Text>
        )
    }

    render() {

        /**
         * Because the state.data is automatically set when the component is created,
         * the state.data should never be null
         */

        if (this.state.data === null) {
            return <p>Loading...</p>
        } else {
            return this.itemList()
        }
    }



}

export default SearchItemsContainer
const wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50vw',
}
