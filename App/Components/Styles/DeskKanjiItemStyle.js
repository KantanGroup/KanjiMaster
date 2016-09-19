import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  desk: {
    height: 45,
    borderRadius: 5,
    marginVertical: 1,
    backgroundColor: '#1a53ff',
    //borderColor: 'green',
    borderWidth: 0.8,
    justifyContent: 'center'
  },
  deskText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20
  }
})
