import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 3,
    width: 350,
    height: 350,
  },
  definition: {
    fontSize: 30,
    textAlign: 'center',
    //marginTop: 10
  },
  kanji: {
    fontSize: 80,
    alignItems: 'center'
  },
  hiragana: {
    fontSize: 40,
    //marginBottom: 10
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    alignItems:'center',
  },
  bottomButtons: {
    height:50,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent: 'center',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 1,
    flex:1,
  },
  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
  },
})
