import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DeskFilterStyle'

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

export default class DeskFilter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      subOptions: []
    };
  }

  renderChoiseLanguage(){
    const options = [
      { label: 'None', value: '' },
      { label: '漢字', value: 'kanji' }
    ];

    const kanjiOptions = [
      { label: 'N5', value: 'n5' },
      { label: 'N4', value: 'n4' },
      { label: 'N3', value: 'n3' },
      { label: 'N2', value: 'n2' },
      { label: 'N1', value: 'n1' },
      { label: 'N0', value: 'n0' }
    ]

    const wordsOptions = [
      { label: '形容詞', value: 'adjective' },
      { label: '動詞', value: 'verb' },
      { label: '名詞', value: 'noun' }
    ]

    const grammarOptions = [
      { label: 'N5', value: 'g5' },
      { label: 'N4', value: 'g4' },
      { label: 'N3', value: 'g3' },
      { label: 'N2', value: 'g2' },
      { label: 'N1', value: 'g1' },
      { label: 'N0', value: 'g0' }
    ]

    function setSelectedOption(option){
      switch (option.value) {
        case 'kanji':
          this.setState({
            selectedItem: option,
            subOptions: kanjiOptions,
            selectedSubItem: []
          });
          break;
        case 'tango':
          this.setState({
            selectedItem: option,
            subOptions: wordsOptions,
            selectedSubItem: []
          });
          break;
        case 'bunpou':
          this.setState({
            selectedItem: option,
            subOptions: grammarOptions,
            selectedSubItem: []
          });
          break;
        default:
          this.setState({
            selectedItem: option,
            subOptions: [],
            selectedSubItem: []
          });
      }
    }

    function setSelectedSubOption(option){
      this.setState({
        selectedSubItem: option
      });
    }

    let subOptions;
    if (this.state.subOptions.length != 0) {
      subOptions = (
        <View>
          <Text style={{marginTop: 10, marginBottom: 10}}> Select subitem </Text>
          <SegmentedControls
            direction={this.props.direction}
            tint= {'#007AFF'}
            selectedTint= {'white'}
            options={ this.state.subOptions }
            onSelection={ setSelectedSubOption.bind(this) }
            selectedOption={ this.state.selectedSubItem }
            extractText={ (option) => option.label }
            testOptionEqual={ (a, b) => {
              if (!a || !b) {
                return false;
              }
              return a.label === b.label
            }}
          />
        </View>
      )
    }

    return (
      <View>
        <SegmentedControls
          direction={this.props.direction}
          tint= {'#007AFF'}
          selectedTint= {'white'}
          options={ options }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedItem }
          extractText={ (option) => option.label }
          testOptionEqual={ (a, b) => {
            if (!a || !b) {
              return false;
            }
            return a.label === b.label
          }}
        />
        {subOptions}
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

// // Prop type warnings
// DeskFilter.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DeskFilter.defaultProps = {
//   someSetting: false
// }
