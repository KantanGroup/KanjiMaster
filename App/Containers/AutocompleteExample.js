import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

// Styles
import styles from './Styles/AutocompleteExampleStyle'

import { Images } from '../Themes'
import Footer from '../Components/Footer'

const API = 'http://swapi.co/api';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

class AutocompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      query: ''
    };
  }

  componentDidMount() {
    const json = require('../Fixtures/inputDatas.json');
    const { results: films } = json;
    this.setState({ films });
  }

  _findFilm(query) {
    if (query === '') {
      return [];
    }

    const { films } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return films.filter(film => film.define.search(regex) >= 0);
  }

  _renderFilm(films) {
    if (films.length > 0) {
      const { define, director, opening_crawl, episode_id } = films[0];
      const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;
      return (
        <View style={styles.info}>
          <Text style={styles.titleText}>{roman}. {define}</Text>
          <Text style={styles.directorText}>({director})</Text>
          <Text style={styles.openingText}>{opening_crawl}</Text>
        </View>
      );
    }

    return (
      <View style={styles.info}>
        <Text style={styles.infoText}>Enter define of a Star Wars movie</Text>
      </View>
    );
  }

  render() {
    const { query } = this.state;
    const films = this._findFilm(query);
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <View>
          {this._renderFilm(films)}
          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            //inputContainerStyle={{margin: 0, marginTop: -10}}
            //listStyle={{margin: 0}}
            //style={{backgroundColor: 'red'}}
            data={films.length === 1 && comp(query, films[0].define) ? [] : films}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            placeholder="Enter Star Wars film define"
            renderItem={({ define, release_date }) => (
              <TouchableOpacity onPress={() => this.setState({ query: define })}>
                <Text style={styles.itemText}>
                  {define} ({release_date.split('-')[0]})
                </Text>
                <Footer />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

export default AutocompleteExample;
