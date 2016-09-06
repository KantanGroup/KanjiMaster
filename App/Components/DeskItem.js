import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/DeskItemStyle'

export default class DeskItem extends React.Component {

  addToDesk (deskid, keyword, type) {
    alert(deskid + " - " + keyword)
  }

  render () {
    return (
      <View>
        <TouchableOpacity key="desk_01" style={styles.desk} onPress={() => {this.addToDesk('Desk 01', 'Keyword', 0)}}>
          <Text style={styles.deskText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// // Prop type warnings
// DeskItem.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DeskItem.defaultProps = {
//   someSetting: false
// }
