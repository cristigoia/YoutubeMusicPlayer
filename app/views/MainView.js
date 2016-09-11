import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'

class MainView extends Component {
  render() {
    return (
      <View style={ styles.view } >
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 22
  }
})

export default MainView