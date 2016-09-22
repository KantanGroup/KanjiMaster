import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DeskItemStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import DeskActions from '../Redux/DeskRedux'
import DatabaseService from '../Services/DatabaseService'

class DeskItem extends React.Component {

  startStudy () {
    this.props.startStudyDesk(this.props.desk.id);
    NavigationActions.flashcard();
  }

  render () {
    const newCards = DatabaseService.getCardInDeskByNewCard(this.props.desk.id, 100)
    const doingCards = DatabaseService.getCardInDeskByDoingCard(this.props.desk.id, -1)
    const reviewCards = DatabaseService.getCardInDeskByReviewCard(this.props.desk.id, -1)
    const cardNew = newCards.length;
    const cardDoing = doingCards.length;
    const cardReivew = reviewCards.length;

    let count = DatabaseService.countCard(this.props.desk.id)
    return (
      <TouchableOpacity style={styles.desk} onPress={() => {this.startStudy()}}>
        <Text numberOfLines={1} style={styles.deskText}>{this.props.desk.name} ({count})</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 10, color: 'blue', paddingLeft: 10}}>New Card: {cardNew}</Text>
          <Text style={{fontSize: 10, color: 'white'}}>Doing Card: {cardDoing}</Text>
          <Text style={{fontSize: 10, color: 'green', paddingRight: 10}}>Review Card: {cardReivew}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startStudyDesk: (id) => dispatch(DeskActions.deskStudy(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskItem)
