import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 20,
  },
  itemText: {
    fontSize: 15,
    margin: 5
  },
  info: {
    //flex: 1,
    //paddingTop: 60,
    //flex: 4,
    //backgroundColor: '#F5FCFF',
    //marginBottom: -10,
    //borderColor: '#dddddd',
    //borderStyle: null,
    //borderWidth: 0.5,
    //borderRadius: 2,
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    //marginBottom: 10,
    //marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
})
