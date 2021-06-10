import './App.css';
import DataTable from './TableView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './Chart';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={DataTable} />
      <Route exact path='/chart' component={Chart} />
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
