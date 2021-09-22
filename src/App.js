import "./App.css";
import { Switch, Route } from "react-router";

import Layout from "./components/UI/Layout";

import Welcome from "./pages/Welcome";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Welcome/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
