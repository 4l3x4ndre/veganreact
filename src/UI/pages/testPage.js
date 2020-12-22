import React, {useState} from 'react'
import {
  Text,
  TouchableHighlight,
} from 'react-native'

const TestPage = () => {

    /**
     * JUST TESTING HERE, NOTHING INTERESTING
     */

    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const text = 'a'

    async function add() {
        await setValue(value + 1)
        console.log(text)
    }

    function add2() {
        console.log("hey2")
        setValue2(value2 + 1)
    }

    return(
        <div style={styleTop}>
            <Text>{value}{value2}</Text>
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={add}
              >
              <Text>Press</Text>
            </TouchableHighlight><TouchableHighlight
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={add2}
              >
              <Text>Press2</Text>
            </TouchableHighlight>
        </div>
    )

}
export default TestPage

const styleTop = {
    marginTop: '20vh',
    display: 'flex',
    justifyContent: 'center',
}
