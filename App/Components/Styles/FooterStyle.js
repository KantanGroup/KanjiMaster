import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})
