import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/TangoStyle'

import { RadioButtons } from 'react-native-radio-buttons';

import F8Touchable from './f8/F8Touchable'
import Star from './Star'

var LayoutAnimation = require('LayoutAnimation');

export default class Tango extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let languages = [];
    let meanings =  [];

    this.props.tango.meanings.map((meaning) => {
      languages.push(meaning.language);
      meanings[meaning.language] = meaning[meaning.language];
    })

    return (
      <View>
        <TangoComponent
          languages={languages}
          tango={this.props.tango.tango}
          hiragana={this.props.tango.hiragana}
          hanViet={this.props.tango.hanViet}
          meanings={meanings}/>
      </View>
    )
  }
}

class TangoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  componentWillMount(){
    this.setState({
      selectedOption: this.props.languages[1] || 'ja',
      selectedMeaning: this.props.meanings[this.props.languages[1] || 'ja']
    });
  }

  renderChoiseLanguage() {
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption,
        selectedMeaning: this.props.meanings[selectedOption]
      });
    }

    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold', color: 'blue'} : {};

      return (
        <TouchableOpacity onPress={onSelect} key={index}>
          <Text style={[styles.languageItem, style]}>{option}</Text>
        </TouchableOpacity>
      );
    }

    function renderContainer(optionNodes){
      return <View style={[styles.language, { flexDirection: 'column', justifyContent: 'space-between'}]}>{optionNodes}</View>;
    }

    return (
      <View>
        <RadioButtons
          options={ this.props.languages }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={this.state.selectedOption }
          renderOption={ renderOption }
          renderContainer={ renderContainer }
          onSelect={ this.switchLanguage(this.state.selectedOption)}
        />
      </View>);
  }

  switchLanguage(selectedlanguage) {
    function setSelectedOption(selectedlanguage){
      this.setState({
        selectedMeaning: this.props.meanings[selectedlanguage]
      });
    }
  }

  render() {
    var description;
    if (this.state.expanded) {
      description = (
        <View style={styles.description}>
          {this.renderChoiseLanguage()}
          <View style={styles.rightItem}>
            <Text style={styles.meaning}>
              {
                this.state.selectedMeaning[0].meaning
              }
            </Text>
          </View>
        </View>
      );
    }
    var hiragana;
    if (this.props.tango !== this.props.hiragana) {
      hiragana = (
        <Text style={styles.text}>
          [{this.props.hiragana}]
        </Text>
      )
    }
    var hanViet;
    if (this.props.hanViet) {
      hanViet = (
        <Text style={styles.text}>
          [{this.props.hanViet}]
        </Text>
      )
    }
    return (
      <View style={styles.row}>
        <F8Touchable onPress={() => this.toggle()}>
          <View style={styles.title} >
            <Text style={styles.symbol}>
              {this.state.expanded ? '\u2212' : '+'}
            </Text>
            <Text style={styles.text}>
              {this.props.tango}
            </Text>
            {hiragana}
            {hanViet}
            <Star rating={4} />
          </View>
        </F8Touchable>
        {description}
      </View>
    );
  }

  toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  }
}
