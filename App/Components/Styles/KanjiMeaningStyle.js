import { Platform, StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  box: {
    margin: 5,
    padding: 10,
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
