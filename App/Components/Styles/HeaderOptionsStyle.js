import { Platform, StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  navButtonLeft: {
    marginTop: (Platform.OS === 'ios') ? 10 : -5,
    marginLeft: (Platform.OS === 'ios') ? 0 : -5,
    backgroundColor: Colors.transparent
  },
  navButtonRight: {
    flexDirection:'row',
    marginTop: (Platform.OS === 'ios') ? 15 : 0,
    marginRight: 5,
    backgroundColor: Colors.transparent
  }
})
