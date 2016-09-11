import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'

class MainLayout extends Component {
  render() {
    return (
      <View style={ styles.view } >
        { this.props.child }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    margin: 50
  }
})

export default MainLayout