import React from 'react';
import {Switch,Route,Redirect,useLocation,Router} from 'react-router-dom';
import HomePage from '../src/screens/home-page';
import ResultsPage from '../src/screens/results-page';
import {AppDiv} from './app.styles';
function App() {
  return (
  
    <AppDiv>
      <Switch>
        <Route exact  path='/' component={HomePage}/>
        <Route exact  path='/analyze' component={ResultsPage}/>
        <Route component={()=><div>404 Page not found</div>} />
      </Switch>   
    </AppDiv>

  );
}

export default App;
