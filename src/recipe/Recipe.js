import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Recipe = (props) => {

    /**
     * Simple recipe component to display information about the recipe passed in props
     */

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.data['title']}</Text>
            </View>
            <img src={props.data['image']} />
        </View>
    )

}

export default Recipe

const styles = StyleSheet.create({
    container : {
        height: '500px',
        padding: '2.5vw',
        margin: 'auto',
        marginBottom: '50px',
        backgroundColor: "#6C8C80"
    },
    titleContainer: {
        width: '100%',
    },
    title: {
        color:'white',
        fontSize: '1em', 
        width: '20vw',
        margin: 'auto',
        marginBottom: '25px'
    },
    image: {

    }
})
