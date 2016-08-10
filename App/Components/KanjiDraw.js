import React from 'react'
import { WebView, View } from 'react-native'
import styles from './Styles/KanjiDrawStyle'

export default class KanjiDraw extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>'
    const lastHtml = '</body></html>'

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.draw}>
            <WebView
              style={{
                height: 150,
                width: 150,
              }}
              source={{html: `${firstHtml}${this.props.svg}${lastHtml}`}}
              scalesPageToFit={true}
              scrollEnabled={false}
            />
          </View>
        </View>
      </View>
    )
  }
}
