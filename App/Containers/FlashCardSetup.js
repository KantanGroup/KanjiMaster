import React, {PropTypes} from 'react'
import { Image, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import HeaderOptions from '../Components/HeaderOptions'

// Styles
import styles from './Styles/FlashCardSetupStyle'

// I18n
import I18n from 'react-native-i18n'

class FlashCardSetup extends React.Component {

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderOptions pressBack={() => NavigationActions.pop()} pressOptions={() => alert("Menu options")}/>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'green'}}>おめでとうございます</Text>
        </View>

      </View>
    )
  }
}

FlashCardSetup.propTypes = {
  nextCard: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    nextCard: state.card.nextCard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardSetup)
