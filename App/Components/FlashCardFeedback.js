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
      feedbackType: 0
    }
  }

  componentWillMount() {
    switch (this.props.type) {
      case 'again':
        this.setState({ feedbackType: Constant.FEEDBACK_AGAIN });
        break;
      case 'hard':
        this.setState({ feedbackType: Constant.FEEDBACK_HARD });
        break;
      case 'good':
        this.setState({ feedbackType: Constant.FEEDBACK_GOOD });
        break;
      case 'easy':
        this.setState({ feedbackType: Constant.FEEDBACK_EASY });
        break;
    }
  }

  addFeedbackToCard () {
    console.log(this.props.card)
    console.log(this.state.feedbackType)
    this.props.feedbackCard(this.props.card, this.state.feedbackType);
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
      <TouchableOpacity style={[styles.bottomButtons, styleType]} onPress={() => {this.addFeedbackToCard()}}>
         <Text style={styles.footerTime}>10 Minutes</Text>
         <Text style={styles.footerText}>{this.props.type.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

FlashCardFeedback.propTypes = {
  card: PropTypes.object,
  feedbackCard: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    card: state.card.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    feedbackCard: (card, feedback) => dispatch(DeskActions.deskFeedbackToCard(card, feedback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardFeedback)
