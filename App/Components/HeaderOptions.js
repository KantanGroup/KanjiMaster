import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/HeaderOptionsStyle'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderOptions extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <View style={styles.navButtonLeft}>
          <TouchableOpacity onPress={this.props.pressBack}>
            <Icon name="navigate-before" color='#dddddd' size={42} />
          </TouchableOpacity>
        </View>
        <View style={styles.navButtonRight}>
          <TouchableOpacity onPress={this.props.pressOptions}>
            <Icon name="more-vert" color='#fff' size={26} />
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
