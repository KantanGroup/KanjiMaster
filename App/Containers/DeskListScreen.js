import React, { PropTypes } from 'react'
import { TouchableOpacity, View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
// For empty lists
import AlertMessage from '../Components/AlertMessage'
import DeskAddButton from '../Components/DeskAddButton'
import DeskItem from '../Components/DeskItem'
import DeskActions from '../Redux/DeskRedux'

// Styles
import styles from './Styles/DeskListScreenStyle'
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class DeskListScreen extends React.Component {

  constructor (props) {
    super(props)

    // Set up our two placeholder values for scrollToBottom()
    this.listHeight = 0
    this.footerY = 0

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = []

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1.id !== r2.id

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.desks)
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
      <DeskItem desk={rowData}/>
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
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.desks)
    })
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
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

  deleteDesk(id) {
    this.props.deleteDesk(id)
    setTimeout(() => {
      NavigationActions.refresh();
    }, 200);
  }

  render () {
    return (
      <View style={styles.container}>
        <DeskAddButton />
          <SwipeListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              renderHiddenRow={ data => (
                  <View style={styles.rowBack}>
                      <Text></Text>
                      <TouchableOpacity onPress={() => this.deleteDesk(data.id)}>
                        <View style={styles.desk}>
                          <MaterialIcons name="delete-forever" color='#ff0000' size={32} />
                        </View>
                      </TouchableOpacity>
                  </View>
              )}
              rightOpenValue={-35}
          />
      </View>
    )
  }
}

DeskListScreen.propTypes = {
  desks: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    desks: state.desk.desks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDesk: (id) => dispatch(DeskActions.deskDelete(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeskListScreen)
