import { Platform, StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  box: {
    flex: 1,
    margin: 5,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 72
  },
  kanji: {
    fontSize: 62,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    //margin: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onyomi: {
    //marginLeft: 3,
    //marginBottom: 5,
    fontSize: 16,
    //textAlign: 'center',
  },
  kunyomi: {
    fontSize: 16,
    //textAlign: 'center',
  },
})
