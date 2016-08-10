import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 115,
    marginBottom: 10,
  },
  box: {
    margin: 5,
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  draw: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
