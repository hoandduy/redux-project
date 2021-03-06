import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import AddEditPage from './AddEdit'
import MainPage from './Main'

Photo.propTypes = {}

function Photo(props) {
  const match = useRouteMatch()
  console.log({match})
  
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:id`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  )
}

export default Photo