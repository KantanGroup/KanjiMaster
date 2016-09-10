import React from 'react'
import { StyleSheet, Modal, ScrollView, Image, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/TangoStyle'

import { RadioButtons } from 'react-native-radio-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';

import { Images } from '../Themes'

import F8Touchable from './f8/F8Touchable'
import Star from './Star'

var LayoutAnimation = require('LayoutAnimation');

function getMeaningByLanguage(meanings, language) {
  let data;
  meanings.map((meaning) => {
    if (meaning.language === language) {
      data = meaning.meaning;
    }
  })
  return data;
}

function getLanguageInTango(tango) {
  let languages = [];
  tango.meanings.map((meaning) => {
    languages.push(meaning.language);
  })
  return languages;
}

export default class Tango extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let meanings =  [];
    return (
      <View>
        <TangoComponent tango={this.props.tango}/>
      </View>
    )
  }
}

class TangoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      modalVisible: false,
      transparent: true
    };
  }

  componentDidMount() {
    let languages = getLanguageInTango(this.props.tango);
    this.setState({
      languages: languages,
      selectedOption: languages[0] || 'ja',
      selectedMeaning: getMeaningByLanguage(this.props.tango.meanings, languages[0] || 'ja'),
    });
  }

  switchLanguage(selectedlanguage) {
    this.setState({
      selectedMeaning: getMeaningByLanguage(this.props.tango.meanings, selectedlanguage)
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const firstHtml = '<html><body><div>'
    const lastHtml = '</div></body></html>'

    let hiragana;
    if (this.props.tango.hiragana) {
      hiragana = (
        <Text style={styles.text}>
          [{this.props.tango.hiragana}]
        </Text>
      )
    }
    let hanViet;
    if (this.props.tango.hanViet) {
      hanViet = (
        <Text style={styles.text}>
          [{this.props.tango.hanViet}]
        </Text>
      )
    }

    let modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    let innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 15}
      : null;
    let activeButtonStyle = {
      backgroundColor: '#ddd'
    };

    const myButton = (
      <Icon.Button name="close" color="red"
        iconStyle={{justifyContent: 'center'}}
        backgroundColor="#FFFFFF" onPress={() => {
          this.setModalVisible(false)
        }}/>
    );

    let languagItem = [];
    let languages = getLanguageInTango(this.props.tango);
    languages.map((langage) => {
      if (langage === 'ja') {
        languagItem.push(
          <TouchableHighlight key="touch_ja" onPress={() => {this.switchLanguage('ja')}} >
            <Text style={{ fontWeight: 'bold', color: 'blue', margin: 10}}>Japanese</Text>
          </TouchableHighlight>
        )
      }
      if (langage === 'en') {
        languagItem.push(
          <TouchableHighlight key="touch_en" onPress={() => {this.switchLanguage('en')}} >
            <Text style={{ fontWeight: 'bold', color: 'blue', margin: 10}}>English</Text>
          </TouchableHighlight>
        )
      }
      if (langage === 'vi') {
        languagItem.push(
          <TouchableHighlight key="touch_vi" onPress={() => {this.switchLanguage('vi')}} >
            <Text style={{ fontWeight: 'bold', color: 'blue', margin: 10}}>Vietnamese</Text>
          </TouchableHighlight>
        )
      }
    })

    return (
      <View style={styles.row}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#FFFFFF", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
              {languagItem}
              {myButton}
            </View>
             <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
               <ScrollView>
                 <HTMLView stylesheet={htmlStyles}
                   value={`${firstHtml}${this.state.selectedMeaning}${lastHtml}`}
                 />
               </ScrollView>
             </View>
           </View>
        </Modal>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View style={styles.title} >
            <Text style={styles.symbol}>
              {this.state.expanded ? '\u2212' : '+'}
            </Text>
            <Text style={styles.text}>
              {this.props.tango.tango}
            </Text>
            {hiragana}
            {hanViet}
            <Star rating={4} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

var htmlStyles = StyleSheet.create({
  font: {
    fontSize: 12 //Change font size
  },
})
