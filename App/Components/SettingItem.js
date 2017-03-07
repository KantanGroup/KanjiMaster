import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SettingItemStyle'

export default class SettingItem extends React.Component {

  // Prop type warnings
  static propTypes = {
    title: React.PropTypes.string
  }

  render () {
    let title;
    if (this.props.title) {
      title = (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {title}
        <View style={styles.children}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
