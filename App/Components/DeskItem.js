import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/DeskItemStyle'

class DeskItem extends React.Component {

  gotoStudy () {
    this.props.getStudyCards(this.props.desk.id);
  }

  render () {
    return (
      <View>
        <TouchableOpacity key="desk_01" style={styles.desk} onPress={() => {this.gotoStudy()}}>
          <Text style={styles.deskText}>{this.props.desk.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudyCards: (deskId) => dispatch(Actions.getStudyCards(deskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskItem)
