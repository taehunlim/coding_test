import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./screens/Home";
import AccordionScreen from "./screens/AccordionScreen";
import DatePickerScreen from "./screens/DatePickerScreen";
import InputScreen from "./screens/InputScreen";
import TimePickerScreen from "./screens/TimePickerScreen";

import "./assets/scss/styles.scss";


function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={props => <Home {...props}/> } />
              <Route path="/accordion" render={props => <AccordionScreen {...props}/> } />
              <Route path="/datepicker" render={props => <DatePickerScreen {...props}/> } />
              <Route path="/timepicker" render={props => <TimePickerScreen {...props}/> } />
              <Route path="/input" render={props => <InputScreen {...props}/> } />

              <Redirect to="/"/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
