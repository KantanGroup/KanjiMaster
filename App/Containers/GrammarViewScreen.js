import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

import HTMLView from 'react-native-htmlview';

// Styles
import styles from './Styles/GrammarViewScreenStyle'

// I18n
import I18n from 'react-native-i18n'

import Footer from '../Components/Footer'

class GrammarViewScreen extends React.Component {

  render () {
    console.log(this.props.grammar.definition)
    return (
      <View style={[styles.mainContainer, { backgroundColor:'#232B2B' }]}>
        <ScrollView style={styles.box}>

          <HTMLView stylesheet={htmlStyles}
            value={this.props.grammar.definition}
          />

          <Text></Text>
          <Text></Text>
        </ScrollView>

        <Footer type='black'/>
      </View>
    )
  }
}

var htmlStyles = StyleSheet.create({
  grammar:{
    color: '#009933',
    //fontSize: 12, //Change font size
  },
  connection:{
    color: '#FF0000',
    //fontSize: 12, //Change font size
  },
  conversation:{
    color: '#FFFFFF',
    //fontSize: 12, //Change font size
  },
  explanation:{
    color: '#E3AE57',
    //fontSize: 12, //Change font size
  },
  example:{
    color: '#FFFFFF',
    //fontSize: 12, //Change font size
  },
  exercise:{
    color: '#E3AE57',
    //fontSize: 12, //Change font size
  },
  answer:{
    color: '#FFFFFF',
    //fontSize: 12, //Change font size
  },
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrammarViewScreen)
