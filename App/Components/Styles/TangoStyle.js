import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5
  },
  innerContainer: {
    borderRadius: 5,
    marginTop: -7,
    //alignItems: 'center',
    maxHeight: 400
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  row: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  separator: {
    marginHorizontal: 20,
  },
  title: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    fontSize: 15,
    lineHeight: 21,
    width: 22,
    color: '#99A7B9',
  },
  description: {
    flex: 1,
    flexDirection: 'row',
  },
  textWord: {
    fontSize: 15,
    lineHeight: 21,
    color: '#990000',
  },
  textHiragana: {
    paddingLeft: 5,
    fontSize: 12,
    lineHeight: 21,
    color: 'blue',
  },
  textHantu: {
    fontSize: 12,
    lineHeight: 21,
    color: '#002350',
  },
  leftItem: {
    //flex: 1,
    //alignItems: 'flex-start',
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    //alignItems: 'flex-end',
  },
  language: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 44,
  },
  languageItem: {
    textAlign: 'center',
    padding: 5,
  },
  meaning: {
    paddingTop: 5,
    lineHeight: 21,
    color: '#002350',
  },
  slide: {
    flex: 1,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 20
  },
})
