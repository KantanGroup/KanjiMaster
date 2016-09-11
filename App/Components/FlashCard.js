import React, {PropTypes} from 'react'
import { BackAndroid, ScrollView, View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

import DeskActions from '../Redux/DeskRedux'
import HeaderOptions from '../Components/HeaderOptions'
import KanjiComponent from '../Components/KanjiComponent'
import FlashCardFooter from '../Components/FlashCardFooter'

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
    this.props.feedbackCard(this.props.card);
    this.setState({
      showDefinition: !this.state.showDefinition,
      showData: this.state.showDefinition ? cardDefinition : cardMeaning
    });
  };

  render () {
    let meaning;
    if (this.state.showDefinition) {
      meaning = (
        <FlasCardDefine showData={this.state.showData} pressAnswer={this.switchFlashCard}/>
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

  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        try {
            NavigationActions.pop();
            return true;
        }
        catch (err) {
            return true;
        }
    });
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderOptions pressBack={() => NavigationActions.pop()} pressOptions={() => alert("Menu options")}/>

        <View style={styles.containerCenter}>
          <View style={styles.centered}>
            <View style={styles.card}>
              {definition}
              <Text numberOfLines={1} style={styles.kanji}>{this.props.showData.kanji}</Text>
              {hiragana}
            </View>
          </View>
        </View>

        <FlashCardFooter pressAnswer={this.props.pressAnswer} type='answer'/>
      </View>
    )
  }
}

class FlasCardMeaning extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        try {
            this.props.onPress();
            return true;
        }
        catch (err) {
            return true;
        }
    });
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderOptions pressBack={this.props.onPress} pressOptions={() => alert("Menu options")}/>

        <KanjiComponent kanjiContent={kanjiContent} tangos={tangos}/>

        <FlashCardFooter type='feedback'/>
      </View>
    )
  }
}

FlashCard.propTypes = {
  newCardInDay: PropTypes.object,
  reviewCardInDay: PropTypes.object,
  card: PropTypes.object,
  cardFront: PropTypes.object,
  cardBack: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    newCardInDay: state.card.newCardInDay,
    reviewCardInDay: state.card.reviewCardInDay,
    card: state.card.card,
    cardFront: state.card.cardFront,
    cardBack: state.card.cardBack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    feedbackCard: (card) => dispatch(DeskActions.deskFeedbackToCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
