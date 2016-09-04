import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    borderRadius: 5,
    marginTop: -7,
    maxHeight: 400,
    backgroundColor: '#fff',
    padding: 15
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  title: {
    margin: 10,
    marginLeft: 15
  }
})
