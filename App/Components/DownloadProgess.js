import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DownloadProgessStyle'

import Toast from 'react-native-root-toast';
import * as Progress from 'react-native-progress';
import RNFetchBlob from 'react-native-fetch-blob'
import ZipArchive from 'react-native-zip-archive'

import StartupActions from '../Redux/StartupRedux'
import Config from 'react-native-config'

// I18n
import I18n from 'react-native-i18n'

class DownloadProgess extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      output: 0
    }
  }

  downloadFileFromLink() {
    let sourcePath = Config.DOWNLOAD_DATA;
    let targetPath;

    const dirs = RNFetchBlob.fs.dirs
    RNFetchBlob.config({ trusty : true, fileCache : true, path : dirs.DocumentDir + '/sample.zip'})
    .fetch('GET', sourcePath)
    .progress((received, total) => {
      var x = received/total;
      this.setState({
        output: x
      });
    })
    .then((resp) => {
      ZipArchive.unzip(resp.path(), dirs.DocumentDir)
      .then(() => {
        Toast.show(I18n.t('dataWasDownloadSuccessful'))
        this.props.initiativeDatabase();
      })
      .catch((error) => {
        Toast.show(I18n.t('pleaseCheckTheStorage'))
      })
      resp.flush()
    })
    .catch((err) => {
      Toast.show(I18n.t('pleaseCheckTheNetworkConnection'))
    })
  }

  render () {
    return (
      <View>
        <TouchableOpacity style={styles.box} onPress={() => this.downloadFileFromLink()}>
          <Text style={styles.text}>{I18n.t('downloadData')}</Text>
        </TouchableOpacity>
        <Progress.Bar progress={this.state.output} width={320} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initiativeDatabase: () => dispatch(StartupActions.initiativeDatabase())
  }
}

export default connect(null, mapDispatchToProps)(DownloadProgess)
