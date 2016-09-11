import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import TabsContainer from './TabsContainer'

const store = configureStore()

export default class ApplicationContainer extends Component {
  render() {
    return (
      <Provider store={ store }>
        <TabsContainer />
      </Provider>
    )
  }
}