import React, {PropTypes} from 'react'
import { ListView, Modal, TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/KanjiOptionsStyle'

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeskAddButton from '../Components/DeskAddButton'
import DeskKanjiItem from '../Components/DeskKanjiItem'

class KanjiOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  componentDidMount() {
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.setState({
      dataSource: ds.cloneWithRows(this.props.desks)
    })
  }

  _renderRow (rowData) {
    return (
      <DeskKanjiItem desk={rowData}/>
    )
  }

  setModalVisible(type, visible) {
    this.setState({
      modalVisible: visible,
      type: type
    });
  }

  render () {
    let modal;

    const myButton = (
      <Icon.Button name="close" color="red" iconStyle={{justifyContent: 'center'}} backgroundColor="#FFFFFF" onPress={() => {this.setModalVisible(this.state.type, false)}}/>
    );

    if (this.state.type === 'addDesk') {
      modal = (
        <View>
          <View style={styles.bar}>
            <View><Text style={styles.title}>Add to desk</Text></View>
            {myButton}
          </View>
           <View style={styles.innerContainer}>
             <DeskAddButton />
             <ListView
               dataSource={this.state.dataSource}
               renderRow={this._renderRow}
               enableEmptySections
             />
           </View>
        </View>
      );
    }
    if (this.state.type === 'addOptions') {
      modal  = (
        <View>
          <View style={styles.bar}>
            <View><Text style={styles.title}>Add options</Text></View>
            {myButton}
          </View>
          <View style={styles.innerContainer}>
             <Text>Options 01</Text>
             <Text>Options 01</Text>
           </View>
        </View>
      )
    }

    return (
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(this.state.type, false)}}
          >
          <View style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
            {modal}
          </View>
        </Modal>
        <TouchableOpacity onPress={() => {this.setModalVisible('addDesk', true)}}>
            <Icon name="add-box" color='#fff' size={23} />
        </TouchableOpacity>
      </View>
    )
  }
}

KanjiOptions.propTypes = {
  keyword: PropTypes.string,
  desks: PropTypes.object,
  kanjiContent: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    keyword: state.kanji.keyword,
    desks: state.desk.desks,
    kanjiContent: state.kanji.kanji
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiOptions)
