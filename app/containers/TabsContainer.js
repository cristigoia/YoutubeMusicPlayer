import React, { Component, } from 'react'
import { View, } from 'react-native'
import { connect } from 'react-redux'
import { setSelectedTab } from '../actions/tab'
import Tabs from '../components/Tabs'

class TabsContainer extends Component {
  constructor(props) {
    super(props)

    this.onTabPress = this.onTabPress.bind(this)
  }
  
  onTabPress(tab) {
    console.log("pressed")
    this.props.dispatch(setSelectedTab(tab))
  }
  
  render() {
    return (
      <Tabs 
        selectedTab={ this.props.selectedTab }
        onTabPress={ this.onTabPress } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { selectedTab } = state.tab
  
  return { selectedTab }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer)