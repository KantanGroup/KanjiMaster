import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/KanjiComponentStyle'

import KanjiMeaning from '../Components/KanjiMeaning'
import KanjiMeaningByTango from '../Components/KanjiMeaningByTango'
import Footer from '../Components/Footer'

export default class KanjiComponent extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>

        <KanjiMeaning kanjiContent={this.props.kanjiContent}/>

        <KanjiMeaningByTango tangos={this.props.tangos}/>

        <Footer type='black'/>

      </View>
    )
  }
}
