import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import Root from 'containers/Root'
import 'styles/main.less'

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('containers/Root', () => {
    const Root = require('containers/Root').default
    ReactDOM.render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
