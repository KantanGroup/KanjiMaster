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
        <Text style={styles.subtitle}>Made with ❤️ by Tran Anh Tuan</Text>
      );
    } else {
      footer = (
        <Text>Made with ❤️ by Tran Anh Tuan</Text>
      );
    }
    return (
      <View style={this.props.type === 'black' ? styles.footerBlack : styles.footerWhite}>
        {footer}
      </View>
    )
  }
}
