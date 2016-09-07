import React, {PropTypes} from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  ScrollView,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  View
} from 'react-native';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DeskCreateScreenStyle'

// I18n
import I18n from 'react-native-i18n'

import DeskAddButton from '../Components/DeskAddButton'
import ImputButton from '../Components/ImputButton'
import SwitchButton from '../Components/SwitchButton'
import SettingItem from '../Components/SettingItem'
import DeskFilter from '../Components/DeskFilter'
import Footer from '../Components/Footer'

class DeskCreateScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      switchIsOn: true
    }
  }

  createDesk() {
    console.log(this._deskFilter.state.selectedItem)
    console.log(this._deskFilter.state.selectedSubItem)
    console.log(this._deskName.state)
    if(this._deskName.state.text === '') {
      alert("Input desk name")
      return
    } else {
      this.props.createDesk(this._deskName.state.text);
    }

    if ((!this._deskFilter.state.selectedItem || (this._deskFilter.state.selectedItem && this._deskFilter.state.selectedItem.value !== ''))
      && (this._deskFilter.state.selectedSubItem && this._deskFilter.state.selectedSubItem.length === 0)) {
      alert("Select a item")
      return
    }

    console.log("Add card to desk")
    NavigationActions.desk()
    //Actions.createDesk();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <SettingItem title="Desk name">
            <ImputButton ref={component => this._deskName = component}/>
          </SettingItem>

          <SettingItem title="Add more data by category">
            <DeskFilter ref={component => this._deskFilter = component} onPress={this.deskDilter}/>
          </SettingItem>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginLeft: 10, marginRight: 10}}>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => this.createDesk()}>
              <Text style={styles.footerText}>Create Desk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => NavigationActions.pop()}>
              <Text style={styles.footerText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <Footer type='black'/>

        </ScrollView>
      </View>
    )
  }
}

DeskCreateScreen.propTypes = {
  dispatch: PropTypes.func,
  createDesk: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDesk: (name) => dispatch(Actions.createDesk(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskCreateScreen)
