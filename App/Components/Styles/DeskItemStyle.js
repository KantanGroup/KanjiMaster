import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  desk: {
    height: 40,
    borderRadius: 5,
    marginVertical: 2,
    backgroundColor: Colors.fire,
    justifyContent: 'center'
  },
  deskText: {
    fontWeight: 'bold',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    marginLeft: 20
  }
})
