import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/FlashCardFooterStyle'

import Constant from '../Transforms/Constant'
import DeskActions from '../Redux/DeskRedux'

class FlashCardFeedback extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      feedbackCard: null,
      relearning: false
    }
  }

  componentWillMount() {
    switch (this.props.type) {
      case 'again':
        this.setState({ feedbackCard: this.props.cardAgain, relearning: true});
        break;
      case 'hard':
        if (this.props.cardHard.nextDay < 0.007) {
          this.setState({ feedbackCard: this.props.cardHard, relearning: true});
        } else {
          this.setState({ feedbackCard: this.props.cardHard, relearning: false});
        }
        break;
      case 'good':
        this.setState({ feedbackCard: this.props.cardGood, relearning: false});
        break;
      case 'easy':
        this.setState({ feedbackCard: this.props.cardEasy, relearning: false});
        break;
    }
  }

  addFeedbackToCard () {
    this.props.updateCard(this.state.feedbackCard, this.state.relearning);
  }

  render () {
    let styleType;
    let text = '< 1 min';
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
        if (this.props.cardHard.nextDay < 0.007) {
          text = '< 10 mins'
        } else {
          text = `${this.props.cardHard.nextDay.toFixed(1)} days`
        }
        break;
      case 'good':
        styleType = {
          backgroundColor: '#004d00',
        };
        text = `${this.props.cardGood.nextDay.toFixed(1)} days`
        break;
      case 'easy':
        styleType = {
          backgroundColor: '#004d99',
        };
        text = `${this.props.cardEasy.nextDay.toFixed(1)} days`
        break;
    }
    return (
      <TouchableOpacity style={[styles.bottomButtons, styleType]} onPress={() => {this.addFeedbackToCard()}}>
         <Text style={styles.footerTime}>{text}</Text>
         <Text style={styles.footerText}>{this.props.type.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

FlashCardFeedback.propTypes = {
  cardAgain: PropTypes.object,
  cardHard: PropTypes.object,
  cardGood: PropTypes.object,
  cardEasy: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    cardAgain: state.desk.cardAgain,
    cardHard: state.desk.cardHard,
    cardGood: state.desk.cardGood,
    cardEasy: state.desk.cardEasy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(DeskActions.deskUpdateCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardFeedback)
