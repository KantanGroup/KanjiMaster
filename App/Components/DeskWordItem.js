import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DeskWordItemStyle'

export default class DeskWordItem extends React.Component {


  render () {
    return (
      <View style={styles.container}>
        <Text>DeskWordItem Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// DeskWordItem.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DeskWordItem.defaultProps = {
//   someSetting: false
// }