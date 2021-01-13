import Users from './Users'
import AddDetails from './AddDetails'
import Error from './Error'

import { Route, Switch } from 'react-router-dom';


function App() {

  


  return (
    <div className="App container">

      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/add" component={AddDetails} />
        <Route component={Error} />
      </Switch>
      

    </div>
  );
}

export default App;
