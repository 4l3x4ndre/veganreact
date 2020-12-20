import React, { useEffect, useRef, useState } from 'react'
import {
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
  SafeAreaView
} from 'react-native'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

import {useMediaQuery} from '../../hooks'
import SearchItemsContainer from './SearchItemsContainer'

// Calculate window size
// const width = Dimensions.get('window').width
// const height = Dimensions.get('window').height

export const SearchBar = () => { 

  /**
   * Here stand the searchbar as well as the items written by the user.
   * The search bar is made with a text input and a TouchableHighlight for the search button.
   * The items are stored within the SearchItemContainer component.
   */

  
  const isRowBased = useMediaQuery('(max-width: 500px)')

  const [update, setUpdate] = useState(false)
  const [value, setValue] = useState("")
  const [listValues, setListValues] = useState([])
  const input = useRef(null)

  const updateListValues = async (newList, child) => {

    /** 
     * The idea here is to store the new list only if : 
     * - the new list is coming from the child
     * - the new list was created by the UseEffect when the user typed something
    */

    if (!update && !child) return
    setUpdate(false)
    if (value === "" && !child) return
    await setListValues(newList)
    setValue("")
  }

  useEffect(() => {
    
    updateListValues([...listValues, value], false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  function onSearch() {

    /** 
     * Set update to true to rerender 
     * */

    setUpdate(true)
  }
  

    return (
      <SafeAreaView style={styles.header_safe_area}>

        <View style={styles_dynamic.header(isRowBased)}>
          <View style={styles.header_inner}>
            <TextInput 
              ref={input}
              placeholder="In my fridge, I have..."
              clearButtonMode="always"
              value={value}
              onChangeText={(value) => setValue(value) }
              style={styles.input}
            />
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={onSearch}
                style={styles.back_icon_box}
              >
              <FontAwesomeIcon icon={Icons.faSearch} size="6x" />
            </TouchableHighlight>
          </View>
        </View>

        <SearchItemsContainer data={listValues} updateListAction={updateListValues}/>
        
      </SafeAreaView>
  )
}

export default SearchBar

const styles_dynamic = {
  header: isRowBased => ({
    height: 50,
    paddingHorizontal: 0,
    width: isRowBased ? '80vw' : '50vw'
  }),
}

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000
  },
  header_inner: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    fontSize: '20%'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15
  },
})