import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Hiring from './Hiring'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Hiring />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
