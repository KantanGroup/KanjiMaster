import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/SearchBoxStyle'

import { Actions as NavigationActions } from 'react-native-router-flux'

import Autocomplete from 'react-native-autocomplete-input';
import Footer from '../Components/Footer'
import GrammarService from '../Services/GrammarService'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDatas: [],
      query: ''
    };
  }

  componentWillMount() {
    this.setState({ inputDatas: GrammarService.getGrammars() });
  }

  _findData(query) {
    if (query === '') {
      return [];
    }

    const { inputDatas } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return inputDatas.filter(inputData => inputData.hiragana.search(regex) >= 0);
  }

  _renderItem(item) {
    return (
      <TouchableOpacity style={styles.box} onPress={() => NavigationActions.grammarview({grammar: item})}>
        <Text style={styles.itemText}>
          {item.grammar}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { query } = this.state;
    const inputDatas = this._findData(query);
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          listStyle={{margin: 10}}
          data={inputDatas.length === 1 && comp(query, inputDatas[0].grammar) ? [] : inputDatas}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          renderItem={this._renderItem}
          clear={true}
        />
      </View>
    );
  }
}
