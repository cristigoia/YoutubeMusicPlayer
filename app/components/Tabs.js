import React, { Component, PropTypes } from 'react'
import { TabBarIOS } from 'react-native'
import SearchTabView from '../views/SearchTabView'
import DownloadTabView from '../views/DownloadTabView'

class Tabs extends Component {
  render() {
    return (
        <TabBarIOS>
          <TabBarIOS.Item
            onPress={ this.props.onTabPress.bind(this, "search") }
            selected={ this.props.selectedTab === "search" }
            systemIcon="search">
            <SearchTabView />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            onPress={ this.props.onTabPress.bind(this, "downloads") }
            selected={ this.props.selectedTab === "downloads" }
            systemIcon="downloads">
            <DownloadTabView />
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}

export default Tabs