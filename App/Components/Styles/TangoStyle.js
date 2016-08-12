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
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
})
