import React, {PropTypes} from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SearchScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

import Database from '../Components/Database'

import KanjiMeaning from '../Components/KanjiMeaning'
import KanjiDraw from '../Components/KanjiDraw'
import KanjiMeaningByTango from '../Components/KanjiMeaningByTango'
import Footer from '../Components/Footer'

class SearchScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    //console.log(this.props.data);
    console.log(this.props.title);
  }

  render () {

    let tangos = require('../Fixtures/tangos.json');

    let kanjiContent = {
      hantu: "HAN",
      kanji: "漢",
      onyomi: "カン",
      level: "4",
      part: "氵 THỦY",
      setsumei:
      `Nghĩa:
      (1) Sông Hán. Sông Thiên Hà (sông Thiên Hà trên trời).
      (2) Nhà Hán. Nước Tàu.
      (3) Giống Hán, giống dân làm chủ nước Tàu từ đời vua Hoàng Đế trở xuống gọi là giống Hán.`
    };

    do {
      Database.write(() => {
        // optional properties can be set to null or undefined at creation
        let charlie = Database.create('Person', {
          name: 'Charlie',
          birthday: new Date(1995, 11, 25),
          car: null,
        });

        // optional properties can be set to `null`, `undefined`,
        // or to a new non-null value
        charlie.birthday = undefined;
        charlie.car = {make: 'Honda', model: 'Accord', miles: 10000};
      });
    } catch {
        console.log("Something went wrong!")
    }


    let allPerson = Database.objects('Person');
    let allCar = Database.objects('Car');

    console.log(allPerson);
    console.log(allCar);
    console.log(Database.schemaVersion);
    console.log(Database.defaultPath);

    Database.write(() => {
      //Database.delete(allPerson);
      //Database.delete(allCar);
    });

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <KanjiMeaning kanjiContent={kanjiContent}/>

          <KanjiMeaningByTango tangos={tangos}/>

          <KanjiMeaning kanjiContent={kanjiContent}/>

          <KanjiMeaningByTango tangos={tangos}/>

          <KanjiMeaning kanjiContent={kanjiContent}/>

          <KanjiMeaningByTango tangos={tangos}/>

          <Footer type='black'/>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
