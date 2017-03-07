import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

//import styles from './Styles/SettingLanguageStyle'

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

export default class SettingLanguage extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  renderChoiseLanguage(){
    const options = [
      { language: 'English', value: 'en' },
      { language: '日本語', value: 'ja' },
      { language: 'Tiếng Việt', value: 'vi' }
    ];

    function setSelectedOption(option){
      this.setState({
        selectedLanguage: option,
      });
    }

    return (
      <View>
        <SegmentedControls
          direction={this.props.direction}
          tint= {'#007AFF'}
          selectedTint= {'white'}
          options={ options }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedLanguage }
          extractText={ (option) => option.language }
          testOptionEqual={ (a, b) => {
            if (!a || !b) {
              return false;
            }
            return a.language === b.language
          }}
        />
        <Text style={{marginTop: 10}}>
          Selected option:
          {
            this.state.selectedLanguage && this.state.selectedLanguage.value || 'none'
          }
        </Text>
      </View>);
  }

  render () {
    return (
      <View>
        {this.renderChoiseLanguage()}
      </View>
    )
  }
}
