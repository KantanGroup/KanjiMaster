import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 10,
  },
  switchbutton: {
    height: 20,
    marginLeft: 10,
    width: 50,
  }
})
