import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  kanjiRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.fire,
    margin: 2,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    height: 80,
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80
  },
  kanjiHanTu: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.snow,
    marginBottom: -5,
  },
  kanji: {
    fontSize: 42,
    alignSelf: 'center',
    color: Colors.snow,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'flex-start',
  },
  onyomi: {
    marginTop: 3,
    marginBottom: 3,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.snow
  },
  kunyomi: {
    marginBottom: 3,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.snow
  },
})
