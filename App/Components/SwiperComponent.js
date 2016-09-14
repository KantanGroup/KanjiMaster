import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import styles from './Styles/SwiperComponentStyle'

import Swiper from 'react-native-swiper';
import HTMLView from 'react-native-htmlview';

export default class SwiperComponent extends React.Component {

  render () {
    let dataItems = []
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
})
