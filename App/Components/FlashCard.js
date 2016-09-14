import React, {PropTypes} from 'react'
import { BackAndroid, ScrollView, View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

import DeskActions from '../Redux/DeskRedux'
import HeaderOptions from '../Components/HeaderOptions'
import KanjiService from '../Services/KanjiService'
import FlashCardEmpty from '../Components/FlashCardEmpty'
import KanjiComponent from '../Components/KanjiComponent'
import FlashCardFooter from '../Components/FlashCardFooter'

var cardDefinition = {
  kanji: "漢字"
}

class FlashCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showEmpty: false,
      showDefinition: true,
      showData: cardDefinition
    }
  }

  componentWillMount() {
    if (!this.props.nextCard) {
      this.setState({
        showEmpty: true
      });
    } else {
      this.setState({
        showDefinition: true,
        nextCard: this.props.nextCard,
        cardFront: this.props.cardFront,
        cardBack: this.props.cardBack
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.nextCard) {
      this.setState({
        showEmpty: true
      });
    } else {
      this.setState({
        showDefinition: true,
        nextCard: nextProps.nextCard,
        cardFront: nextProps.cardFront,
        cardBack: nextProps.cardBack
      });
    }
  }

  switchFlashCard = () => {
    this.props.feedbackCard(this.state.nextCard);
    this.setState({
      showDefinition: !this.state.showDefinition
    });
  };

  render () {
    if (this.state.showEmpty) {
      return (
        <View style={styles.container}>
          <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

          <FlashCardEmpty />

        </View>
      )
    }
    let meaning;
    if (this.state.showDefinition) {
      meaning = (
        <FlasCardFront card={this.state.cardFront} pressAnswer={this.switchFlashCard}/>
      )
    } else {
      meaning = (
        <FlasCardBack card={this.state.cardBack} onPress={this.switchFlashCard}/>
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

class FlasCardFront extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let topDefinition;
    if (this.props.card && this.props.card.topDefinition) {
      topDefinition = (
        <Text numberOfLines={2} style={styles.definition}>{this.props.card.topDefinition}</Text>
      );
    }
    let bottomDefinition;
    if (this.props.card && this.props.card.bottomDefinition) {
      bottomDefinition = (
        <Text numberOfLines={1} style={styles.hiragana}>{this.props.card.bottomDefinition}</Text>
      );
    }
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderOptions pressBack={() => NavigationActions.pop()} pressOptions={() => alert("Menu options")}/>

        <View style={styles.containerCenter}>
          <View style={styles.centered}>
            <View style={styles.card}>
              {topDefinition}
              <Text numberOfLines={1} style={styles.kanji}>{this.props.card && this.props.card.word}</Text>
              {bottomDefinition}
            </View>
          </View>
        </View>

        <FlashCardFooter pressAnswer={this.props.pressAnswer} type='answer'/>
      </View>
    )
  }
}

class FlasCardBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tangos: []
    }
  }

  componentWillMount() {
    let tangos = [];
    const datas = KanjiService.getTangoByKeyword(this.props.card.kanjiContent.keyword)
    Object.keys(datas).forEach(function(key) {
      tangos.push(datas[key]);
    });
    this.setState({
      tangos: tangos
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <KanjiComponent kanjiContent={this.props.card.kanjiContent} tangos={this.state.tangos}/>

          <FlashCardFooter type='feedback'/>
        </View>
      </View>
    )
  }
}

FlashCard.propTypes = {
  newCardInDay: PropTypes.object,
  reviewCardInDay: PropTypes.object,
  nextCard: PropTypes.object,
  cardFront: PropTypes.object,
  cardBack: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    newCardInDay: state.card.newCardInDay,
    reviewCardInDay: state.card.reviewCardInDay,
    nextCard: state.card.nextCard,
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
