import React, { Component, } from 'react'
import { Text } from 'react-native'
import MainView from './MainView'
import SearchBar from  'react-native-search-bar'

class SearchTabView extends Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <MainView>
        <SearchBar
          ref={(component) => this._searchBar = component }
          placeholder='Search'
          onChangeText={ () => { }}
          showsCancelButton={ true }
          onSearchButtonPress={ () => { this._searchBar.unFocus() } }
          onCancelButtonPress={ () => { this._searchBar.unFocus() } } />

        <Text>Search tab view</Text>
      </MainView>
    )
  }
}

export default SearchTabView