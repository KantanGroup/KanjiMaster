import React from 'react'
import { ScrollView, View, Text } from 'react-native'
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
      <ScrollView style={{flex: 1, flexDirection: 'column'}}>

        <KanjiMeaning kanjiContent={this.props.kanjiContent}/>

        <KanjiMeaningByTango tangos={this.props.tangos}/>

        <Footer type='black'/>

      </ScrollView>
    )
  }
}
