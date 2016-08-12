import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/TangoStyle'

export default class Tango extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{this.props.tango.title}</Text>
        <Text style={styles.label}>{this.props.tango.description}</Text>
      </View>
    )
  }
}
