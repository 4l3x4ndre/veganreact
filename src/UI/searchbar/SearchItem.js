import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
  } from 'react-native'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

const SearchItem = (props) => {

    /** 
     *  This is the item that whas been written by the user.
     *  It's made of the name and a button to remove the item from the list.
     *  To remove itself the item is colling the 'deleteItem' function from the ItemContainer
     *  that has been passed in props.
     */

    return(
        <div>
            <View style={_styles.header_inner}>
                <Text style={_styles.text}>{props.text}</Text>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={"#ccd0d5"}
                    onPress={() => {
                        props.deleteAction(props.text)
                    }}
                    style={_styles.icon}
                >
                    <FontAwesomeIcon icon={Icons.faTimesCircle} size="1x" />
                </TouchableHighlight>
            </View>   
        </div>
    )

}

export default SearchItem

const _styles = StyleSheet.create({
    text: {
        fontSize: '.9em',
        color:'black',
        fontWeight: 'bold',
        marginHorizontal: '5%',
    },
    header_inner: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',

      borderRadius:'25px',
      backgroundColor:'rgb(233, 233, 233)',
      width: 'fit-content',
      height: '50px',
      padding: 10,
      marginRight: 15,
      marginVertical: 5,
    },
    icon: {
        color: 'black',
        marginRight: '5%',
    },
})