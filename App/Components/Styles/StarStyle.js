import { Platform, StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  star: {
    width: 15,
    height: 15,
  },
  stars: {
    ...Platform.select({
      ios: {
        marginTop: 3,
      },
    }),
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
