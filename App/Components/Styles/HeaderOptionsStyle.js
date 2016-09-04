import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  navButtonLeft: {
    marginTop: -10,
    marginLeft: -5,
  },
  navButtonRight: {
    flexDirection:'row',
    marginRight: 5,
  }
})
