import React, { PropTypes } from 'react'
import { View, Image, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/KanjiByJLPTScreenStyle'

//Components
import KanjiDefineByRow from '../Components/KanjiDefineByRow'
import KanjiService from '../Services/KanjiService'

class KanjiByJLPTScreen extends React.Component {

  constructor (props) {
    super(props)

    // Set up our two placeholder values for scrollToBottom()
    this.listHeight = 0
    this.footerY = 0
    this.offset = 0
    this.startIndex = 0
    this.endIndex = 20
    this.stepIndex = 20

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    /*
    const dataObjects = [
      {hantu: "HAN", level: 3,kanji: "漢", onyomi: "カン"},
      {hantu: "TU", level: 5,kanji: "字", onyomi: "ジ", kunyomi: "あざ    あざな    -な"},
      {hantu: "XẠ, DẠ, DỊCH", level: 5,kanji: "射", onyomi: "シャ", kunyomi: "い.る    さ.す    う.つ"},
      {hantu: "KÍCH", level: 1, kanji: "撃", onyomi: "ゲキ", kunyomi: "う.つ"},
      {hantu: "HAN", level: 2, kanji: "漢", onyomi: "カン"},
      {hantu: "TU", level: 3, kanji: "字", onyomi: "ジ", kunyomi: "あざ    あざな    -な"},
      {hantu: "XẠ, DẠ, DỊCH", level: 4,kanji: "射", onyomi: "シャ", kunyomi: "い.る    さ.す    う.つ"},
      {hantu: "KÍCH", level: 5, kanji: "撃", onyomi: "ゲキ", kunyomi: "う.つ"},
    ]
    */
    //const dataObjects = require('../Fixtures/hantus.json');
    const dataObjects = KanjiService.getKanjiMatomes(this.startIndex, this.endIndex);
    const noDataObjects = []

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <KanjiDefineByRow kanjiContent={rowData} onPress={() => NavigationActions.kanjiview({kanjiContent: rowData})}/>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  refreshContent = (startIndex, endIndex) => {
    const dataObjects = KanjiService.getKanjiMatomes(startIndex, endIndex);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dataObjects)
    })
  }

  fetchNextData = () => {
    this.endIndex += this.stepIndex
    this.refreshContent(this.startIndex, this.endIndex)
  }

  // Magical helper function that can scroll your ListView to the bottom
  scrollToBottom(animated = true) {
    if (this.listHeight && this.footerY && this.footerY > this.listHeight) {
      // Calculates the y scroll position inside the ListView
      const scrollTo = this.footerY - this.listHeight

      // Scroll that sucker!
      this.refs.listView.scrollTo({
        y: scrollTo,
        animated: animated,
      })

    }
  }

  // Save the list's height when it renders
  onLayout = (event) => {
    const layout = event.nativeEvent.layout
    this.listHeight = layout.height
  }

  // Render a footer. Keep onFooterLayout if you decide to fill out this section
  renderFooter = () => {
    return (
      <View onLayout={this.onFooterLayout} />
    )
  }

  // When the footer is laid out, store its y-position
  onFooterLayout = (event) => {
    const layout = event.nativeEvent.layout
    this.footerY = layout.y
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this._renderRow}
          renderFooter={this.renderFooter}
          onEndReached={this.fetchNextData}
          onEndReachedThreshold={10}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiByJLPTScreen)
