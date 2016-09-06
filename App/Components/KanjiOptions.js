import React, {PropTypes} from 'react'
import { Modal, TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/KanjiOptionsStyle'

import Icon from 'react-native-vector-icons/MaterialIcons';

class KanjiOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  componentDidMount() {
    console.log("KanjiOptions " + this.props.keyword);
  }

  setModalVisible(type, visible) {
    this.setState({
      modalVisible: visible,
      type: type
    });
  }

  addToDesk (deskid, keyword, type) {
    alert(deskid + " - " + keyword)
  }

  render () {
    let modal;

    const myButton = (
      <Icon.Button name="close" color="red" iconStyle={{justifyContent: 'center'}} backgroundColor="#FFFFFF" onPress={() => {this.setModalVisible(this.state.type, false)}}/>
    );

    if (this.state.type === 'addDesk') {
      let desks;
      
      modal  = (
        <View>
          <View style={styles.bar}>
            <View><Text style={styles.title}>Add to desk</Text></View>
            {myButton}
          </View>
           <View style={styles.innerContainer}>
             <TouchableOpacity key="desk_01" style={styles.desk} onPress={() => {this.addToDesk('Desk 01', 'Keyword', 0)}}>
               <Text style={styles.deskText}>Desk 01</Text>
             </TouchableOpacity>
             <TouchableOpacity key="desk_02" style={styles.desk} onPress={() => {this.addToDesk('Desk 02', 'Keyword', 0)}}>
               <Text style={styles.deskText}>Desk 02</Text>
             </TouchableOpacity>
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
        <TouchableOpacity onPress={() => alert("Menu call")}>
            <Icon name="call" color='#fff' size={23} style={{paddingRight:5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.setModalVisible('addDesk', true)}}>
            <Icon name="add-box" color='#fff' size={23} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Menu options")}>
          <Icon name="more-vert" color='#fff' size={23} style={{paddingRight:-5}} />
        </TouchableOpacity>
      </View>
    )
  }
}

KanjiOptions.propTypes = {
  keyword: PropTypes.string,
  kanjiContent: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    keyword: state.kanji.keyword,
    kanjiContent: state.kanji.kanji
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiOptions)
