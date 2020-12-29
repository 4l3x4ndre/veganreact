import React, { useEffect, useState } from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import {useMediaQuery} from '../hooks'
import constants from '../API/constants'

const Recipe = (props) => {

    /**
     * Simple recipe component to display information about the recipe passed in props
     */  
    
    const [recipeInfo, setRecipeInfo] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [fetchLoading, setFetchLoading] = useState(false)

    const isRowBased = useMediaQuery('(max-width: 500px)')
    const baseRecipeUrl = 'https://api.spoonacular.com/recipes/'
    const endRecipeUrl = '/information?includeNutrition=false'

    async function fetchRecipeInformation(recipeId) {
        let recipeUrl = urlRecipeInfoGenerator(baseRecipeUrl, endRecipeUrl, constants.APIKEY, recipeId)
        console.log('fetch from ' + recipeUrl)
        await setFetchLoading(true)
        fetch(recipeUrl)
            .then((response) => response.json())
            .then((info) => {
                console.log(info)
                if (info['code'] !== 402) {
                    setRecipeInfo(info)
                    setFetchLoading(false)
                }
                console.log(recipeInfo)
            })
    }
    
    //#region useEffect
    // useEffect(() => {

    //     async function fetchRecipeInformation(recipeId) {
    //         let recipeUrl = urlRecipeInfoGenerator(baseRecipeUrl, endRecipeUrl, constants.APIKEY, recipeId)
    //         console.log('fetch from ' + recipeUrl)
    //         await setFetchLoading(true)
    //         fetch(recipeUrl)
    //             .then((response) => response.json())
    //             .then((info) => {
    //                 console.log(info)
    //                 if (info['code'] !== 402) {
    //                     setRecipeInfo(info)
    //                     setFetchLoading(false)
    //                 }
    //             })
    //     }

    //     fetchRecipeInformation(props.data['id'])
    // }, [])
    // #endregion 

    return(
        <View style={styles_dynamic.container(isRowBased)}>

            <View style={styles.titleContainer}>
                <Text style={styles_dynamic.title(isRowBased)}>{props.data['title']}</Text>
            </View>

            <img style={styles_dynamic.image} src={props.data['image']} alt=''/>

            <View style={styles.ingredients}>
                {props.data['usedIngredients'].map((item, index) => 
                <Text style={styles.usedIngredients} key={index}>{item.name}</Text>
                )}
                {props.data['missedIngredients'].map((item, index) => 
                <Text style={styles.missedIngredients} key={index}>{item.name}</Text>
                )}
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Button 
                        onPress={() => fetchRecipeInformation(props.data['id'])} 
                        title="See recipe" 
                        color="#A66A35" 
                        touchSoundDisabled={false}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.ingredients}>
                <Text>
                    {recipeInfo === null ? 'nothing' : recipeInfo['vegetarian'].toString()}
                </Text>
            </View>

        </View>
    )

}

export default Recipe


function urlRecipeInfoGenerator(baseUrl, endUrl, key, id) {
    return baseUrl + id.toString() + endUrl + '&apiKey=' + key
}


const styles_dynamic = {
    title: isRowBased => ({
        color:'white',
        fontSize: '1.5rem', 
        margin: 'auto',
        marginBottom: '25px',
        width: isRowBased ? '90vw' : '20vw'
    }),
    container: isRowBased => ({
        height: 'fit-content',
        width: isRowBased ? '95vw' : '25vw',
        padding: '2.5vw',
        margin: 'auto',
        marginBottom: '50px',
        backgroundColor: "#6C8C80"
    }),
    image : {
        height: 'auto',
        width: '100%'
    }
  }

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
    },
    title: {
        color:'white',
        fontSize: '1.5rem', 
        width: '20vw',
        margin: 'auto',
        marginBottom: '25px',
    },
    ingredients: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    usedIngredients: {
        color:'white',
        fontSize:'1rem',
        backgroundColor: '#D9B9A7',
        margin: '10px',  
        borderRadius:'25px',
        width: 'fit-content',
        height: 'fit-content',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 15,
        flex: 1,
    },
    missedIngredients: {
        color:'white',
        fontSize:'1rem',
        backgroundColor: '#3C2F40',
        margin: '10px',  
        borderRadius:'25px',
        width: 'fit-content',
        height: 'fit-content',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 15,
        flex: 1,
    },
    buttonView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    button: {
        width: '40%',
    }
})
