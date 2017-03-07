import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/HeaderOptionsStyle'

import { Actions as NavigationActions } from 'react-native-router-flux'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HeaderOptions extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <View style={styles.navButtonLeft}>
          <TouchableOpacity onPress={this.props.pressBack}>
            <MaterialIcons name="arrow-back" color='#dddddd' size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationActions.startup()}>
            <MaterialIcons name="home" color='#dddddd' size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.navButtonRight}>
          <TouchableOpacity onPress={this.props.pressOptions}>
            <MaterialIcons name="more-vert" color='#fff' size={32} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// // Prop type warnings
// HeaderOptions.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// HeaderOptions.defaultProps = {
//   someSetting: false
// }
