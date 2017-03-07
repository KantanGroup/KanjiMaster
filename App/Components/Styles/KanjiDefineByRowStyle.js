import { Platform, StyleSheet } from 'react-native';
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
    height: 90
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90
  },
  kanjiHanTu: {
    fontSize: 14,
    alignSelf: 'center',
    color: Colors.snow,
    ...Platform.select({
      android: {
        marginTop: -2,
        marginBottom: -2
      }
    }),
  },
  kanji: {
    fontSize: 36,
    alignSelf: 'center',
    color: Colors.snow,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    ...Platform.select({
      android: {
        marginTop: 5,
      }
    }),
    alignItems: 'flex-start',
    justifyContent: 'center',
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
