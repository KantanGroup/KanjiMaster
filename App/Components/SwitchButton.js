import React from 'react'
import { Switch, View, Text } from 'react-native'
import styles from './Styles/SwitchButtonStyle'

export default class SwitchButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      enableHanTu: false
    }
  }

  // Prop type warnings
  static propTypes = {
    text: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>{this.props.text}</Text>
        <Switch
          onValueChange={(value) => this.setState({enableHanTu: value})}
          value={this.state.enableHanTu} />
      </View>
    );
  }
}
