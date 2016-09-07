import React from 'react'
import { Switch, View, Text } from 'react-native'
import styles from './Styles/SwitchButtonStyle'

export default class SwitchButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      switchIsOn: false
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>{this.props.label}</Text>
        <Switch
          onValueChange={(value) => this.setState({switchIsOn: value})}
          value={this.state.switchIsOn} />
      </View>
    );
  }
}
