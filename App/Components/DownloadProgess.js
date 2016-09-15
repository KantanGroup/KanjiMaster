import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DownloadProgessStyle'

export default class DownloadProgess extends React.Component {


  render () {
    return (
      <View style={styles.container}>
        <Text>DownloadProgess Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// DownloadProgess.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DownloadProgess.defaultProps = {
//   someSetting: false
// }