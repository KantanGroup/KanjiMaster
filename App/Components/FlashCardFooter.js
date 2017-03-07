import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/FlashCardFooterStyle'

import FlashCardFeedback from './FlashCardFeedback'

export default class FlashCardFooter extends React.Component {

  render () {
    switch (this.props.type) {
      case 'answer':
        return (
          <View style={styles.footer}>
            <FlashCardAnswer pressAnswer={this.props.pressAnswer}/>
          </View>
        )
      case 'feedback':
        return (
          <View style={styles.footer}>
            <FlashCardFeedback type="again"/>
            <FlashCardFeedback type="hard"/>
            <FlashCardFeedback type="good"/>
            <FlashCardFeedback type="easy"/>
          </View>
        )
    }
    return (
      <View style={styles.footer}>
        <Text>Unsupported</Text>
      </View>
    )
  }
}

class FlashCardAnswer extends React.Component {

  render () {
    return (
      <TouchableOpacity style={styles.bottomButtons} onPress={this.props.pressAnswer}>
         <Text style={styles.footerText}>ANSWER</Text>
      </TouchableOpacity>
    )
  }
}
