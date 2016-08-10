import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/KanjiCardDefineStyle'

export default class KanjiCardDefine extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.draw}>
            <Text>KanjiCardDefine Component</Text>
          </View>
        </View>
      </View>
    )
  }
}
