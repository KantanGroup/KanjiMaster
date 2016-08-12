import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/KanjiMeaningStyle'

export default class KanjiMeaning extends React.Component {

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
      <View style={styles.box}>
        <View style={styles.draw}>
          <Text>The application generator uses the ignite-base template to provide a fresh application with all the common tech wired up and ready to roll. Base applications come with common development screens, tools, and components. As for now, this is a 'Kitchen Sink' plan of attack. Eventually to be paired down, and adjustable in v2.0</Text>
        </View>
      </View>
    )
  }
}
