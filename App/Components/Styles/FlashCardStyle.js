import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    width: 290,
    height: 290,
  },
  definition: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  },
  kanji: {
    fontSize: 80,
    alignItems: 'center'
  },
  hiragana: {
    fontSize: 40,
    marginBottom: 10
  }
})
