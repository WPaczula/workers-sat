import Intro from './intro'
import WebWorkers from './web-worker'
import ServiceWorkers from './service-worker'

const homeRoute = {
  key: 'intro',
  path: '/',
  component: Intro,
  exact: true,
}

const webWorkerRoute = {
  key: 'web Worker',
  path: '/web-worker',
  component: WebWorkers,
  exact: true,
}

const serviceWorkerRoute = {
  key: 'service Worker',
  path: '/service-worker',
  component: ServiceWorkers,
  exact: true,
}

export default [
  homeRoute,
  webWorkerRoute,
  serviceWorkerRoute,
]
