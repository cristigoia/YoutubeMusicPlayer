import React, { Component, PropTypes } from 'react'
import { Text, View, TabBarIOS, StyleSheet } from 'react-native'

class Tabs extends Component {
  render() {
    return (
        <TabBarIOS>
          <TabBarIOS.Item
            onPress={ this.props.onTabPress.bind(this, "search") }
            selected={ this.props.selectedTab === "search" }
            systemIcon="search">
            <View style={ styles.tabContent }>
              <Text>Tab de search</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            onPress={ this.props.onTabPress.bind(this, "history") }
            selected={ this.props.selectedTab === "history" }
            systemIcon="history">
            <View style={ styles.tabContent }>
              <Text>Tab de histórico</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            onPress={ this.props.onTabPress.bind(this, "downloads") }
            selected={ this.props.selectedTab === "downloads" }
            systemIcon="downloads">
            <View style={ styles.tabContent }>
              <Text>Tab de downloads</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: "center",
    margin: 50
  }
})
export default Tabs