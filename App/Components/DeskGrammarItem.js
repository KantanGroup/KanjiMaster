import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DeskGrammarItemStyle'

export default class DeskGrammarItem extends React.Component {


  render () {
    return (
      <View style={styles.container}>
        <Text>DeskGrammarItem Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// DeskGrammarItem.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DeskGrammarItem.defaultProps = {
//   someSetting: false
// }