import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import styles from './Styles/SwiperComponentStyle'

import Swiper from 'react-native-swiper';
import HTMLView from 'react-native-htmlview';

export default class SwiperComponent extends React.Component {

  render () {
    let dataItems = []
    if (this.props.firstComponent) {
      dataItems.push(this.props.firstComponent);
    }
    this.props.datas.map((data, index) => {
      dataItems.push(
        <View key={`swiper_${index}`} style={styles.slide}>
          <ScrollView>
            <HTMLView stylesheet={htmlStyles}
              value={data}
            />
          </ScrollView>
        </View>
      )
    })
    if (this.props.lastComponent) {
      dataItems.push(this.props.lastComponent);
    }

    return (
      <Swiper width={this.props.width || 350} height={this.props.height || 350}
         onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
         dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         activeDot={<View style={{backgroundColor: '#00f', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         paginationStyle={{
           bottom: 5
         }}
        >
        {dataItems}
      </Swiper>
    )
  }
}

var htmlStyles = StyleSheet.create({
  font: {
    //fontSize: 14, //Change font size
    lineHeight: 20
  },
  hiragana: {
    color: '#009933',
    //fontSize: 14, //Change font size
    lineHeight: 20
  },
  type: {
    color: '#ff99cc',
    //fontSize: 14, //Change font size
    lineHeight: 20
  },
  meaning: {
    color: 'blue',
    fontSize: 12, //Change font size
    lineHeight: 20
  },
  sample: {
    color: '#b22222',
    fontSize: 12, //Change font size
    lineHeight: 20,
    paddingLeft: 10,
  },
  samplemeaning: {
    color: '#999966',
    fontSize: 12, //Change font size
    lineHeight: 20,
    paddingLeft: 10,
  },
  samemeaning: {
    color: '#999966',
    //fontSize: 14, //Change font size
    lineHeight: 20
  },
})
