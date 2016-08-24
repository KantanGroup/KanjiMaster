import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: {
    marginTop: Metrics.doubleBaseMargin - 20,
    marginLeft: Metrics.baseMargin - 10,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  }
})
