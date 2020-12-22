import React from 'react'

class Recipe extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data:props.data
        }
        console.log(this.state.data)
    }

    render() {
        return (
            <div style={style}>
                <p>{this.state.data['title']}</p>
            </div>
        )
    }
}

export default Recipe

const style = {
    margin: '50px'
}

