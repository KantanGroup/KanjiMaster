import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FooterStyle'

export default class Footer extends React.Component {
  render () {
    return (
      <View style={styles.footer}>
        <Text style={styles.subtitle}>Made with ❤️ by Infinite Red</Text>
      </View>
    )
  }
}
