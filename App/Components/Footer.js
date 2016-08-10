import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FooterStyle'

export default class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let footer;
    if (this.props.type === 'black') {
      footer = (
        <View style={styles.footerBlack}>
          <Text style={styles.subtitle}>Made with ❤️ by Tran Anh Tuan</Text>
        </View>
      );
    } else {
      footer = (
        <View style={styles.footerWhite}>
          <Text>Made with ❤️ by Tran Anh Tuan</Text>
        </View>
      );
    }
    return (
      <View>
        {footer}
      </View>
    )
  }
}
