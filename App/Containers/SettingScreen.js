import React from 'react'
import { TouchableOpacity, ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { SegmentedControls } from 'react-native-radio-buttons'

// Styles
import styles from './Styles/SettingScreenStyle'

// I18n
import I18n from 'react-native-i18n'

// Components
import FlashCard from '../Components/FlashCard'
import Footer from '../Components/Footer'
import SwitchButton from '../Components/SwitchButton'
import SettingItem from '../Components/SettingItem'
import SettingLanguage from '../Components/SettingLanguage'

var RNFS = require('react-native-fs');
var jobId = -1;

class SettingScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      output: 'Doc folder: ' + RNFS.DocumentDirectoryPath
    }
  }

  downloadFileTest (background, url) {
    if (jobId !== -1) {
      this.setState({ output: 'A download is already in progress' });
    }

    var progress = data => {
      var percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
      var text = `Progress ${percentage}%`;
      this.setState({ output: text });
    };

    var begin = res => {
      this.setState({ output: 'Download has begun' });
    };

    var progressDivider = 1;

    this.setState({ imagePath: { uri: '' } });

    // Random file name needed to force refresh...
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.jpg`;

    const ret = RNFS.downloadFile({ fromUrl: url, toFile: downloadDest, begin, progress, background, progressDivider });

    jobId = ret.jobId;

    ret.promise.then(res => {
      this.setState({ output: JSON.stringify(res) });
      this.setState({ imagePath: { uri: 'file://' + downloadDest } });

      jobId = -1;
    }).catch(err => {
      this.showError(err)
      console.log(err)
      jobId = -1;
    });
  }

  showError (err) {
    this.setState({ output: `ERROR: Code: ${err.code} Message: ${err.message}` });
  }

  render () {
    /*
    console.log('Doc folder: ' + RNFS.DocumentDirectoryPath);
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
    */
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView style={styles.container}>

          <SettingItem title={I18n.t('setteiHanTu')}>
            <SwitchButton ref='setteiHanTu' label='Hiển thị hỗ trợ Hán Tự'/>
          </SettingItem>

          <SettingItem title={I18n.t('settingLanguage')}>
            <SettingLanguage　language='en' direction='column'/>
          </SettingItem>

          <View>
            <Text style={styles.text}>{this.state.output}</Text>

            <Image style={styles.image} source={this.state.imagePath}></Image>
          </View>

          <TouchableOpacity style={styles.box} onPress={() => this.downloadFileTest(true, 'http://lorempixel.com/400/200/')}>
            <Text style={styles.text}>Create new Desk</Text>
          </TouchableOpacity>

          <Footer type='black'/>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
