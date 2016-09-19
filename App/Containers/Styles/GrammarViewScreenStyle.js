import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  box: {
    flex: 1,
    margin: 5,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 5,
  },
})
