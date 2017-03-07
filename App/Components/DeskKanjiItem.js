import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DeskKanjiItemStyle'

import Toast from 'react-native-root-toast';
import CardActions from '../Redux/CardRedux'

class DeskKanjiItem extends React.Component {

  addToDesk (deskId, front) {
    this.props.addKanjiToDesk(deskId, front);
  }

  render () {
    return (
      <TouchableOpacity style={styles.desk} onPress={() => {this.addToDesk(this.props.desk.id, this.props.keyword)}}>
        <Text style={styles.deskText}>{this.props.desk.name}</Text>
      </TouchableOpacity>
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
    addKanjiToDesk: (deskId, front) => dispatch(CardActions.kanjiAddToDesk(deskId, front))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskKanjiItem)
