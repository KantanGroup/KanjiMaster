import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/SearchBoxStyle'

import { Actions as NavigationActions } from 'react-native-router-flux'

import Autocomplete from 'react-native-autocomplete-input';
import Footer from '../Components/Footer'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDatas: [],
      query: ''
    };
  }

  componentDidMount() {
    const json = require('../Fixtures/inputDatas.json');
    const { results: inputDatas } = json;
    this.setState({ inputDatas });
  }

  _findData(query) {
    if (query === '') {
      return [];
    }

    const { inputDatas } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return inputDatas.filter(inputData => inputData.define.search(regex) >= 0);
  }

  _renderItem(item) {
    return (
      <TouchableOpacity onPress={() => NavigationActions.search({data: item, title: item.define})}>
        <Text style={styles.itemText}>
          {item.define} ({item.release_date.split('-')[0]})
        </Text>
        <Footer />
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
          //containerStyle={styles.autocompleteContainer}
          //inputContainerStyle={{margin: 5, marginTop: -15}}
          listStyle={{margin: 10}}
          //style={{backgroundColor: 'red'}}
          data={inputDatas.length === 1 && comp(query, inputDatas[0].define) ? [] : inputDatas}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          //placeholder={this.props.placeholder}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
