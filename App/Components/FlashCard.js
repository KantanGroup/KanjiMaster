import React, {PropTypes} from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

import HeaderOptions from '../Components/HeaderOptions'
import KanjiComponent from '../Components/KanjiComponent'

var cardDefinition = {
  definition: 'Kanji',
  kanji: '漢字',
  hiragana: 'かんじ'
}

var cardMeaning = {
  definition: 'Chữ hán',
  kanji: '漢字',
  hiragana: '漢字は難しい'
}

class FlashCard extends React.Component {

  constructor (props) {
    super(props)

    // Datasource is always in state
    this.state = {
      showDefinition: true,
      showData: cardDefinition
    }
  }

  switchFlashCard = () => {
      this.setState({
        showDefinition: !this.state.showDefinition,
        showData: this.state.showDefinition ? cardDefinition : cardMeaning
      });
  };

  render () {
    let meaning;
    if (this.state.showDefinition) {
      meaning = (
        <FlasCardDefine showData={this.state.showData} onPress={this.switchFlashCard}/>
      )
    } else {
      meaning = (
        <FlasCardMeaning showData={this.state.showData} onPress={this.switchFlashCard}/>
      )
    }
    return (
      <View style={styles.container}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        {meaning}

      </View>
    )
  }
}

class FlasCardDefine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let definition;
    if (this.props.showData.definition) {
      definition = (
        <Text numberOfLines={2} style={styles.definition}>{this.props.showData.definition}</Text>
      );
    }
    let hiragana;
    if (this.props.showData.hiragana) {
      hiragana = (
        <Text numberOfLines={1} style={styles.hiragana}>{this.props.showData.hiragana}</Text>
      );
    }
    return (
      <View style={{flex: 1}}>
        <HeaderOptions pressBack={() => NavigationActions.pop()} pressOptions={() => alert("Menu options")}/>

        <View style={styles.containerCenter}>
          <View style={styles.centered}>
            <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
              {definition}
              <Text numberOfLines={1} style={styles.kanji}>{this.props.showData.kanji}</Text>
              {hiragana}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
           <TouchableOpacity style={styles.bottomButtons}>
              <Text style={styles.footerText}>A</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.bottomButtons}>
              <Text style={styles.footerText}>B</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.bottomButtons}>
              <Text style={styles.footerText}>C</Text>
           </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class FlasCardMeaning extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tangos = require('../Fixtures/tangos.json');

    let kanjiContent = {
      hantu: "HAN",
      kanji: "漢",
      onyomi: "カン",
      level: "4",
      part: "氵 THỦY",
      setsumei:
      `Nghĩa:
      (1) Sông Hán. Sông Thiên Hà (sông Thiên Hà trên trời).
      (2) Nhà Hán. Nước Tàu.
      (3) Giống Hán, giống dân làm chủ nước Tàu từ đời vua Hoàng Đế trở xuống gọi là giống Hán.`
    };

    return (
      <ScrollView>
        <HeaderOptions pressBack={this.props.onPress} pressOptions={() => alert("Menu options")}/>

        <TouchableOpacity onPress={this.props.onPress}>

          <KanjiComponent kanjiContent={kanjiContent} tangos={tangos}/>

        </TouchableOpacity>
      </ScrollView>
    )
  }
}

FlashCard.propTypes = {
  newCardInDay: PropTypes.object,
  reviewCardInDay: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    newCardInDay: state.card.newCardInDay,
    reviewCardInDay: state.card.reviewCardInDay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
