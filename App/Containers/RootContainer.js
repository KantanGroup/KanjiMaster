import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import DeskActions from '../Redux/DeskRedux'

// import './Config/PushConfig'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
    this.props.getDesks()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

const mapStateToDispatch = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
  getDesks: () => dispatch(DeskActions.desksSearch())
})

export default connect(null, mapStateToDispatch)(RootContainer)
