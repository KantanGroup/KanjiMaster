import React, {PropTypes} from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/KanjiOptionsStyle'

import Icon from 'react-native-vector-icons/MaterialIcons';

class KanjiOptions extends React.Component {

  componentDidMount() {
    console.log("KanjiOptions " + this.props.keyword);
  }

  render () {
    return (
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => alert("Menu call")}>
            <Icon name="call" color='#fff' size={23} style={{paddingRight:5}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Menu attach-file")}>
            <Icon name="attach-file" color='#fff' size={23} style={{paddingRight:5}} />
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
