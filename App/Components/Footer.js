import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FooterStyle'

// I18n
import I18n from 'react-native-i18n'

export default class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let footer;
    if (this.props.type === 'black') {
      footer = (
        <Text style={styles.subtitle}>{I18n.t('copyRight')}</Text>
      );
    } else {
      footer = (
        <Text>{I18n.t('copyRight')}</Text>
      );
    }
    return (
      <View style={this.props.type === 'black' ? styles.footerBlack : styles.footerWhite}>
        {footer}
      </View>
    )
  }
}
