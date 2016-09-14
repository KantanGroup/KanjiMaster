import React from 'react'
import { StyleSheet, Modal, ScrollView, Image, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/TangoStyle'

import { RadioButtons } from 'react-native-radio-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';
import Swiper from 'react-native-swiper';

import { Images } from '../Themes'

import F8Touchable from './f8/F8Touchable'
import Star from './Star'
import SwiperComponent from './SwiperComponent'

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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let hiragana;
    if (this.props.tango.hiragana) {
      hiragana = (
        <Text style={styles.textHiragana}>
          ({this.props.tango.hiragana})
        </Text>
      )
    }
    let hanViet;
    if (this.props.tango.hanViet) {
      hanViet = (
        <Text style={styles.textHantu}>
          {this.props.tango.hanViet}
        </Text>
      )
    }

    let modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    let innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 0}
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

    let languagDatas = [];
    let languages = getLanguageInTango(this.props.tango);
    languages.map((langage) => {
      if (langage === 'ja') {
        let meaning  = getMeaningByLanguage(this.props.tango.meanings, 'ja')
        languagDatas.push(meaning);
      }
      if (langage === 'en') {
        let meaning  = getMeaningByLanguage(this.props.tango.meanings, 'en')
        languagDatas.push(meaning);
      }
      if (langage === 'vi') {
        let meaning  = getMeaningByLanguage(this.props.tango.meanings, 'vi')
        languagDatas.push(meaning);
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
              <View><Text></Text></View>
              {myButton}
            </View>
             <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
               <SwiperComponent datas={languagDatas}/>
             </View>
           </View>
        </Modal>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View style={styles.title} >
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.symbol}>
                {this.state.expanded ? '\u2212' : '+'}
              </Text>
              <Text style={styles.textWord}>
                {this.props.tango.tango}
              </Text>
              {hiragana}
            </View>
            <View style={{flexDirection: 'row'}}>
              {hanViet}
              <Star rating={4} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
