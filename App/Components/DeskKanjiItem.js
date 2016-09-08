import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/DeskKanjiItemStyle'

import Toast from 'react-native-root-toast';

import DatabaseService from '../Services/DatabaseService'

class DeskKanjiItem extends React.Component {

  addToDesk (deskId, keyword) {
    //this.props.addCardToDesk(deskId, keyword, 0);
    //*
    let hasCard = DatabaseService.hasCardInDesk(deskId, keyword, 0)
    if (!hasCard) {
      DatabaseService.addCard(deskId, keyword, 0)
      Toast.show("Add successful")
    } else {
      Toast.show("Have been added to desk")
    }
    //*/
  }

  render () {
    return (
      <View>
        <TouchableOpacity key="desk_01" style={styles.desk} onPress={() => {this.addToDesk(this.props.desk.id, this.props.keyword)}}>
          <Text style={styles.deskText}>{this.props.desk.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

DeskKanjiItem.propTypes = {
  keyword: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    keyword: state.kanji.keyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCardToDesk: (deskId, keyword, type) => dispatch(Actions.addCardToDesk(deskId, keyword, type)),
    getStudyCards: (deskId) => dispatch(Actions.getStudyCards(deskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskKanjiItem)
