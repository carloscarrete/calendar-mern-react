import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state =>state.auth);

  useEffect(() => {
      dispatch(startChecking());
  }, [dispatch])

  if(checking){
    return <h1>Cargando...</h1>
  }
  

  return (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path='/login' component={LoginScreen} isAuthenticated={!!uid}/>
            <PrivateRoute exact path='/' component={CalendarScreen} isAuthenticated={!!uid}/>

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  )
}
