import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/FlashCardFooterStyle'
import FlashCardFeedback from './FlashCardFeedback'

export default class FlashCardFooter extends React.Component {

  render () {
    return (
      <View style={styles.footer}>
         <FlashCardFeedback type="again"/>
         <FlashCardFeedback type="hard"/>
         <FlashCardFeedback type="good"/>
         <FlashCardFeedback type="easy"/>
      </View>
    )
  }
}

// // Prop type warnings
// FlashCardFooter.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// FlashCardFooter.defaultProps = {
//   someSetting: false
// }
