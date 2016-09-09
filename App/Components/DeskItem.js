import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/DeskItemStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DeskItem extends React.Component {

  startStudy () {
    this.props.startStudyDesk(this.props.desk.id);
    NavigationActions.flashcard();
  }

  render () {
    return (
      <View>
        <TouchableOpacity style={styles.desk} onPress={() => {this.startStudy()}}>
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
    startStudyDesk: (deskId) => dispatch(Actions.startStudyDesk(deskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskItem)
