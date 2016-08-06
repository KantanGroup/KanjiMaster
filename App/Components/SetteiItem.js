import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SetteiItemStyle'

export default class SetteiItem extends React.Component {

  // Prop type warnings
  static propTypes = {
    title: React.PropTypes.string
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.children}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
