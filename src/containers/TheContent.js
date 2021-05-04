import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  console.log('contents is called')
  return (
    <main className="c-main">
      <div>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <div>
                      <route.component {...props} />
                    </div>
                  )} />
              )
            })}
            {/* <Redirect from="/" to="/login" /> */}
          </Switch>
        </Suspense>
      </div>
    </main>
  )
}

export default React.memo(TheContent)
