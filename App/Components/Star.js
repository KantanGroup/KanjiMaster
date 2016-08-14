import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Images } from '../Themes'

import styles from './Styles/StarStyle'

export default class Star extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let { rating } = this.props;
    let ratings = [];
    for (var i=1; i <= rating; i++) {
        ratings.push(i);
    }
    const stars = ratings.map(
      (value) => (
        <Image style={styles.star} source={Images.fullStar} />
      )
    );
    return (
      <View style={styles.stars}>
        {stars}
      </View>
    )
  }
}
