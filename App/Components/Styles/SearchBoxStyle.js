import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 5,
    zIndex: 100,
  },
  autocompleteContainer: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 20,
  },
  box: {
    height: 40,
    borderRadius: 5,
    marginVertical: 1,
    backgroundColor: '#222930',
    borderColor: '#e73536',
    //borderWidth: 0.8,
    justifyContent: 'center',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginLeft: 20
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
    //marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
})
