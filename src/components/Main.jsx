import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Redirect, Route, Switch } from 'react-router-native'
import SignIn from './SignIn.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <SignIn/>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main
