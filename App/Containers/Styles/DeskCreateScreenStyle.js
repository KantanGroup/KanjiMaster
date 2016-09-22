import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bottomButtons: {
    height:40,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 1,
    flex:1
  },
  footerText: {
    color: Colors.fire,
    fontWeight:'bold',
    alignItems:'center'
  }
})
