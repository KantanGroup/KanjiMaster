import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/DeskAddButtonStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class DeskAddButton extends React.Component {


  render () {
    return (
      <TouchableOpacity style={styles.box} onPress={() => NavigationActions.deskCreation()}>
        <Text style={styles.text}>Create new Desk</Text>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// DeskAddButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DeskAddButton.defaultProps = {
//   someSetting: false
// }
