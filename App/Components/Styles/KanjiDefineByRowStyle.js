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
    height: 80
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80
  },
  kanjiHanTu: {
    fontSize: 14,
    alignSelf: 'center',
    color: Colors.snow
  },
  kanji: {
    fontSize: 36,
    alignSelf: 'center',
    color: Colors.snow,
    ...Platform.select({
      android: {
        marginTop: -5,
        marginBottom: -5
      }
    })
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
