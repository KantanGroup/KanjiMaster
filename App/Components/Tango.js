import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/TangoStyle'

import { RadioButtons } from 'react-native-radio-buttons';

import F8Touchable from './f8/F8Touchable'
import Star from './Star'
import HtmlText from './HtmlText'

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

  renderChoiseLanguage() {
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption,
        selectedMeaning: getMeaningByLanguage(this.props.tango.meanings, this.state.selectedOption)
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
          options={ this.state.languages }
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
        selectedMeaning: getMeaningByLanguage(this.props.tango.meanings, this.state.selectedOption)
      });
    }
  }

  render() {
    var description;
    const firstHtml = '<html><body><div>'
    const lastHtml = '</div></body></html>'
    if (this.state.expanded) {
      description = (
        <View style={styles.description}>
          {this.renderChoiseLanguage()}
          <View style={styles.rightItem}>
            <HtmlText html={`${firstHtml}${this.state.selectedMeaning}${lastHtml}`}/>
          </View>
        </View>
      );
    }

    var hiragana;
    if (this.props.tango.hiragana) {
      hiragana = (
        <Text style={styles.text}>
          [{this.props.tango.hiragana}]
        </Text>
      )
    }
    var hanViet;
    if (this.props.tango.hanViet) {
      hanViet = (
        <Text style={styles.text}>
          [{this.props.tango.hanViet}]
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
              {this.props.tango.tango}
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
