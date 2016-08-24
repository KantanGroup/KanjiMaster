import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

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

export default class FlashCard extends React.Component {

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
    let definition;
    if (this.state.showData.definition) {
      definition = (
        <Text numberOfLines={2} style={styles.definition}>{this.state.showData.definition}</Text>
      );
    }
    let hiragana;
    if (this.state.showData.hiragana) {
      hiragana = (
        <Text numberOfLines={1} style={styles.hiragana}>{this.state.showData.hiragana}</Text>
      );
    }
    let meaning;
    if (this.state.showDefinition) {
      meaning = (
        <TouchableOpacity style={styles.card} onPress={this.switchFlashCard}>
          {definition}
          <Text numberOfLines={1} style={styles.kanji}>{this.state.showData.kanji}</Text>
          {hiragana}
        </TouchableOpacity>
      )
    } else {
      meaning = (
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity style={styles.card} onPress={this.switchFlashCard}>
            {definition}
            <Text numberOfLines={1} style={styles.kanji}>{this.state.showData.kanji}</Text>
            {hiragana}
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.switchFlashCard}>
            {definition}
            <Text numberOfLines={1} style={styles.kanji}>{this.state.showData.kanji}</Text>
            {hiragana}
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.switchFlashCard}>
            {definition}
            <Text numberOfLines={1} style={styles.kanji}>{this.state.showData.kanji}</Text>
            {hiragana}
          </TouchableOpacity>
        </ScrollView>
      )
    }
    return (
      <Animatable.View
        delay={this.props.delay ? this.props.delay: 500}
        animation={this.state.showDefinition ? 'pulse' : 'flipInY'}
      >
        {meaning}
      </Animatable.View>
    )
  }
}
