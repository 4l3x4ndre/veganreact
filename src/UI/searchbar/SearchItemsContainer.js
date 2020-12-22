import React, { useEffect, useState } from 'react'

import SearchItem from './SearchItem'

const SearchItemsContainer = (props) => {

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

    const [data, setData] = useState([])

    useEffect(() => {

        /**
         * Called by the parent : SearchBar.
         * Change the data according to the new list of the SearchBar.
         */

        setData(props.data)
    }, [props.data])

    const deleteItem = async (itemText) => {

        /**
         * This function is called by the item (as 'deleteAction').
         * It searches the index of the item. Then removes it from the copy list.
         * And then it set the state.data of this component with the new list without the item.
         * When the state.data has been updated, it calls the 'updateListAction', in order to
         * update the SearchBar list as well.
         */

        let copy = [...data]
        let index = copy.indexOf(itemText)
        if (index !== -1) {
            copy.splice(index, 1)
            console.log(copy)
            setData(copy)
            props.updateListAction(copy, true)
        }
    }
    return (
        <div style={wrapper}>
            {data.map((item, index) => (
            <SearchItem key={index} text={item} deleteAction={deleteItem} />
            ))}
        </div>
    )

}

export default SearchItemsContainer

const wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50vw',
}
