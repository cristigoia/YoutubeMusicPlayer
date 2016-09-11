import React, { Component, } from 'react'
import MainView from './MainView'
import SearchBar from  'react-native-search-bar'

import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native'

import { 
  List, 
  ListItem,
} from 'react-native-elements'

class SearchTabView extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      searchResults: []
    }
  }
  
  toggleLoading() {
    this.setState({ isLoading: !this.state.isLoading })
  }
  
  componentDidMount() {
    this.fetchVideos()
  }
  
  fetchVideos(searchText) {
    this.setState({ isLoading: true })
    
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&type=video&videoDefinition=high&key=AIzaSyD8flZWTmbHLRIGYfiCDnNWwjcb34gi5ns`)
    .then(response => response.json())
    .then(body => {
      this.setState({ isLoading: false, searchResults: body.items })
    })
    .catch(err => { throw err })
  }
  
  createActivityIndicator() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={'black'} />
      </View>
    )
  }
  
  createListItem(item, key) {
    console.log(item.snippet)

    let { title, thumbnails } = item.snippet

    return (
      <ListItem
        key={ key }
        title={ title }
        avatar={ thumbnails.default.url } 
        hideChevron={ true }
        onPress={ () => console.log(item) } />
    )
  }
  
  createNoResult() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize:  24 }}>Nenhum resultado cara</Text>
      </View>
    )
  }
  
  onSearchChange(text) {
    if (text) {
      this.fetchVideos(text)
    }
  }
  
  render() {
    let listContent =
      (this.state.isLoading)
      ? this.createActivityIndicator()
      : (this.state.searchResults.length) 
        ? this.state.searchResults.map(this.createListItem)
        : this.createNoResult()

    return (
      <MainView>
        <SearchBar
          ref={ (component) => this._searchBar = component }
          placeholder='Search'
          onChangeText={ this.onSearchChange.bind(this) }
          showsCancelButton={ true }
          onSearchButtonPress={ () => { this._searchBar.unFocus() } }
          onCancelButtonPress={ () => { this._searchBar.unFocus() } } />

        <List 
          containerStyle={{ marginTop: 0, flex: 1 }}>
          { listContent }
        </List>
      </MainView>
    )
  }
}

export default SearchTabView