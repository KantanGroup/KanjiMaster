import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  box: {
    height: 40,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20
  }
})
