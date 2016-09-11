import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/FlashCardFooterStyle'

export default class FlashCardFooter extends React.Component {

  render () {
    switch (this.props.type) {
      case 'answer':
        return (
          <View style={styles.footer}>
            <FlashCardAnswer pressAnswer={this.props.pressAnswer}/>
          </View>
        )
        break;
      case 'feedback':
        return (
          <View style={styles.footer}>
            <FlashCardFeedback type="again"/>
            <FlashCardFeedback type="hard"/>
            <FlashCardFeedback type="good"/>
            <FlashCardFeedback type="easy"/>
          </View>
        )
        break;
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

class FlashCardFeedback extends React.Component {

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
