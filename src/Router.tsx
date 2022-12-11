import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reactjs__reactjs-master-class/:coinId">
          <Coin />
        </Route>
        <Route path="/reactjs__reactjs-master-class">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
