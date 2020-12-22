import React from 'react'

const Recipe = (props) => {

    /**
     * Simple recipe component to display information about the recipe passed in props
     */

    return(
        <div style={style}>
            <p>{props.data['title']}</p>
        </div>
    )

}

export default Recipe

const style = {
    margin: '50px'
}

