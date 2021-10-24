import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import * as routes from '../../Routes/routes'

import PageLoading from '../common/PageLoading'

import './index.css'

const HomePage = React.lazy(() => import('../Pages/Home'))
const ShareLandingPage = React.lazy(() => import('../Pages/ShareLandingPage'))
const LandingHomePage = React.lazy(() => import('../Pages/LandingHomePage'))
const App = () => {

  return (
    <Suspense fallback={<PageLoading />}>
      <div className="app">
        <Route exact path={routes.Home} component={() => <HomePage />} />
        <Route exact path={routes.ShareLandingPage} component={() => <ShareLandingPage />} />
        <Route exact path={routes.LandingHomePage} component={() => <LandingHomePage/>} />
      </div>
    </Suspense>
  )
}

export default App
