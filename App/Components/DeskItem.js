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
    let count = DatabaseService.countCard(this.props.desk.id)
    return (
      <TouchableOpacity style={styles.desk} onPress={() => {this.startStudy()}}>
        <Text style={styles.deskText}>{this.props.desk.name} ({count})</Text>
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
