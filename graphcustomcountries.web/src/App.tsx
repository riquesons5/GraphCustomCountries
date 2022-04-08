import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detailCard/:id" component={Details} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
