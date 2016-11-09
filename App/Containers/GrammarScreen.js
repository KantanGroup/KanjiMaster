import React, { PropTypes } from 'react'
import { TouchableOpacity, View, Image, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'
import itemstyles from '../Components/Styles/DeskItemStyle'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/KanjiByJLPTScreenStyle'

//Components
import GrammarService from '../Services/GrammarService'
import SearchBox from '../Components/SearchBox'

class GrammarScreen extends React.Component {

  constructor (props) {
    super(props)

    // Set up our two placeholder values for scrollToBottom()
    this.listHeight = 0
    this.footerY = 0
    this.offset = 0
    this.startIndex = 0
    this.endIndex = 50
    this.stepIndex = 50

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = GrammarService.getGrammars(this.startIndex, this.endIndex);
    console.log(dataObjects.length);
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
      <TouchableOpacity style={itemstyles.desk} onPress={() => NavigationActions.grammarview({grammar: rowData})}>
        <Text style={itemstyles.deskText}>{rowData.id}. {rowData.grammar}</Text>
      </TouchableOpacity>
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
    const dataObjects = GrammarService.getGrammars(startIndex, endIndex);
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
        <SearchBox />
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          contentContainerStyle={[styles.listContent, {marginTop: 70}]}
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

export default connect(mapStateToProps, mapDispatchToProps)(GrammarScreen)
