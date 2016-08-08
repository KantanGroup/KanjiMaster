import React from 'react'
import { WebView, View } from 'react-native'
import styles from './Styles/KanjiCardDrawStyle'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class KanjiCardDraw extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const HTML = `
    <svg height="250px" version="1.1" width="250px" xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative; left: -0.5px;"
       viewBox="0 0 125 125" preserveAspectRatio="xMinYMin" class="dmak-svg">
      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc>
      <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
      <path fill="none" stroke="#cccccc" d="M62.5,0L62.5,125" stroke-width="0.5" stroke-dasharray="4,1.5"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
      <path fill="none" stroke="#cccccc" d="M0,62.5L125,62.5" stroke-width="0.5" stroke-dasharray="4,1.5"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
      <path fill="none" stroke="#bfb772" d="M27.62,14.5C31.86,18.35,36.4,25.08,37,27" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 15.7168, 15.7168; stroke-dashoffset: 0;"></path>
      <text x="21.50" y="13.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#bfb772"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">1</tspan>
      </text>
      <path fill="none" stroke="#a4bf72" d="M49.5,11.5C51.28,13.74,55.54,19.61,56.25,23.25" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 13.6424, 13.6424; stroke-dashoffset: 0;"></path>
      <text x="41.50" y="10.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#a4bf72"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2</tspan>
      </text>
      <path fill="none" stroke="#82bf72"
            d="M78.25,11.38C78.56,12.55,78.29,13.4,77.53,14.670000000000002C75.93,17.310000000000002,72.46000000000001,21.48,69.26,24.51"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 16.3628, 16.3628; stroke-dashoffset: 0;"></path>
      <text x="69.50" y="10.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#82bf72"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">3</tspan>
      </text>
      <path fill="none" stroke="#72bf85"
            d="M27.84,34.42C28.58,35.160000000000004,29.46,36.25,29.65,37.410000000000004C30.759999999999998,44.480000000000004,31.979999999999997,51.660000000000004,33.23,60C33.5,61.79,33.769999999999996,63.63,34.04,65.53"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 32.0102, 32.0102; stroke-dashoffset: 0;"></path>
      <text x="21.50" y="42.13" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#72bf85"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.7550000000000026" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">4</tspan>
      </text>
      <path fill="none" stroke="#72bfa8"
            d="M30,35.64C42.75,33.97,64.38,31.73,74.27000000000001,30.75C78.46000000000001,30.34,81.38000000000001,32,80.68,35.76C79.52000000000001,41.97,77.82000000000001,49.67,76.01,55.79C75.53,57.42,75.04,58.93,74.55000000000001,60.269999999999996"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 79.6179, 79.6179; stroke-dashoffset: 0;"></path>
      <text x="28.50" y="32.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#72bfa8"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">5</tspan>
      </text>
      <path fill="none" stroke="#72b3bf" d="M32.57,48.36C41.5,47.13,71.88,44.25,77.59,44.17" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 45.2227, 45.2227; stroke-dashoffset: 0;"></path>
      <text x="34.99" y="44.76" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#72b3bf"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.759999999999998" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">6</tspan>
      </text>
      <path fill="none" stroke="#7291bf" d="M34.66,61.04C46.38,60,61,58.62,74.38,57.71" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 39.8601, 39.8601; stroke-dashoffset: 0;"></path>
      <text x="38.25" y="57.13" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#7291bf"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.7550000000000026" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7</tspan>
      </text>
      <path fill="none" stroke="#7672bf"
            d="M12.25,76.95C14.79,77.49000000000001,19.490000000000002,77.73,22.009999999999998,77.49000000000001C41.51,75.62,65.71000000000001,73.87,88.72,73.01C92.95,72.85000000000001,95.51,73.27000000000001,97.63,73.54"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 85.609, 85.609; stroke-dashoffset: 0;"></path>
      <path fill="none" stroke="#9872bf"
            d="M52.99,35.86C53.88,36.75,54.580000000000005,38.05,54.59,39.339999999999996C54.63,44.849999999999994,54.580000000000005,78,54.56,93.13C54.56,96.00999999999999,54.56,98.24,54.56,99.52"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 64.1029, 64.1029; stroke-dashoffset: 0;"></path>
      <text x="4.50" y="79.63" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#9872bf"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.7549999999999955" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">8</tspan>
      </text>
      <text x="46.50" y="42.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none"
            fill="#9872bf"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;">
          <tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">9</tspan>
      </text>
    </svg>
    `;

    return (
      <View style={styles.container}>
        <View style={styles.draw}>
          <WebView
            style={{
              height: 250,
              width: 250,
            }}
            source={{html: HTML}}
            scalesPageToFit={true}
          />
        </View>
      </View>
    )
  }
}
