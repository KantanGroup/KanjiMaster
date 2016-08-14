import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
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
    //backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    //justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  separator: {
    marginHorizontal: 20,
  },
  title: {
    //paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  symbol: {
    fontSize: 15,
    lineHeight: 21,
    width: 22,
    color: '#99A7B9',
  },
  description: {
    //padding: 14,
    //paddingLeft: 20 + 22,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    color: '#002350',
    //flex: 1,
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
    width: 40,
  },
  languageItem: {
    textAlign: 'center',
    padding: 5,
  },
  meaning: {
    paddingLeft: 10,
    lineHeight: 21,
    color: '#002350',
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
})
