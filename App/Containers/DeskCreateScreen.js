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
import { Images } from '../Themes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import DeskActions from '../Redux/DeskRedux'
import CardActions from '../Redux/CardRedux'
import Toast from 'react-native-root-toast';

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
    let date = new Date();
    let id = date.getTime();

    if(this._deskName.state.text === '') {
      Toast.show("Input desk name")
      return
    } else {
      this.props.createDesk(id, this._deskName.state.text);
    }

    if ((!this._deskFilter.state.selectedItem || (this._deskFilter.state.selectedItem && this._deskFilter.state.selectedItem.value !== ''))
      && (this._deskFilter.state.selectedSubItem && this._deskFilter.state.selectedSubItem.length === 0)) {
      Toast.show("Select a item")
      return
    } else {
      if (this._deskFilter.state.selectedItem && this._deskFilter.state.selectedItem.value === "kanji") {
        this.props.addKanjiByPropertyToDesk(id, this._deskFilter.state.selectedSubItem.value);
      }
    }

    NavigationActions.pop();
    setTimeout(() => {
      NavigationActions.refresh();
    }, 100);
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
            <TouchableOpacity style={styles.bottomButtons} onPress={() => { try { NavigationActions.pop() } catch (error) {}}}>
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
  createDesk: PropTypes.func,
  addKanjiByPropertyToDesk: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDesk: (id, name) => dispatch(DeskActions.deskCreate(id, name)),
    addKanjiByPropertyToDesk: (deskId, property) => dispatch(CardActions.kanjiByPropertyAddToDesk(deskId, property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskCreateScreen)
