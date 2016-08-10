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
    width: 60
  },
  kanjiHanTu: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
  },
  kanji: {
    fontSize: 42,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  onyomi: {
    marginLeft: 3,
    marginBottom: 5,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.snow
  },
  kunyomi: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.snow
  },
})
