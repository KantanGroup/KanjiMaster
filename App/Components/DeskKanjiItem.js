import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/DeskKanjiItemStyle'

class DeskKanjiItem extends React.Component {

  addToDesk () {
    console.log(this.props.desk.id + " - " + this.props.keyword)
    this.props.addCardToDesk(this.props.desk.id, this.props.keyword, 0);
  }

  render () {
    return (
      <View>
        <TouchableOpacity key="desk_01" style={styles.desk} onPress={() => {this.addToDesk()}}>
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
    addCardToDesk: (deskId, keyword, type) => dispatch(Actions.addCardToDesk(deskId, keyword, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskKanjiItem)
