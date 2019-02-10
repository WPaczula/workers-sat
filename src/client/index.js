import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../app'
import routes from '../app/routes'
import createScore from '../app/data/store'

const preloadedState = window.REDUX_DATA

const AppWrapper = () => (
  <Provider store={createScore({ isSSR: false, preloadedState })}>
    <Router>
      <App routes={routes} />
    </Router>
  </Provider>
)

hydrate(<AppWrapper />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('SW registered'))
    .catch(() => console.log('SW failed'))
} else {
  console.log('SW not supported')
}
