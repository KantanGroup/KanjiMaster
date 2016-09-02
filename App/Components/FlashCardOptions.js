import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/FlashCardBarStyle'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FlashCardOptions extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => alert("Menu call")}>
            <Icon name="call" color='#fff' size={23} style={{paddingRight:5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Menu attach-file")}>
            <Icon name="attach-file" color='#fff' size={23} style={{paddingRight:5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Menu options")}>
          <Icon name="more-vert" color='#fff' size={23} style={{paddingRight:-5}} />
        </TouchableOpacity>
      </View>
    )
  }
}

// // Prop type warnings
// FlashCardOptions.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// FlashCardOptions.defaultProps = {
//   someSetting: false
// }
