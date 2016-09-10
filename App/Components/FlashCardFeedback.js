import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/FlashCardFeedbackStyle'

export default class FlashCardFeedback extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let styleType;
    switch (this.props.type) {
      case 'again':
        styleType = {
          backgroundColor: '#cc0000',
        };
        break;
      case 'hard':
        styleType = {
          backgroundColor: '#262626',
        };
        break;
      case 'good':
        styleType = {
          backgroundColor: '#004d00',
        };
        break;
      case 'easy':
        styleType = {
          backgroundColor: '#004d99',
        };
        break;
    }

    return (
      <TouchableOpacity style={[styles.bottomButtons, styleType]}>
         <Text style={styles.footerTime}>10 Minutes</Text>
         <Text style={styles.footerText}>{this.props.type.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// FlashCardFeedback.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// FlashCardFeedback.defaultProps = {
//   someSetting: false
// }
