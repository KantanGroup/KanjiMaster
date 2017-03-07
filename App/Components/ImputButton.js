import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './Styles/ImputButtonStyle'

export default class ImputButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    let label;
    if (this.props.label) {
      label = (
        <Text style={styles.title}>{this.props.label}</Text>
      )
    }
    return (
      <View style={styles.row}>
        {label}
        <TextInput
          style={{ flex: 1, marginLeft: 10, height: 40}}
          placeholder="Type here to input desk name"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

// // Prop type warnings
// ImputButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ImputButton.defaultProps = {
//   someSetting: false
// }
