import React, {useState} from 'react'

const Recipe = (props) => {

    return(
        <div style={style}>
            <p>{props.data['title']}</p>
        </div>
    )
    
}

// class Recipe extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             data:props.data
//         }
//         console.log(this.state.data)
//     }

//     render() {
//         return (
//             <div style={style}>
//                 <p>{this.state.data['title']}</p>
//             </div>
//         )
//     }
// }

export default Recipe

const style = {
    margin: '50px'
}

